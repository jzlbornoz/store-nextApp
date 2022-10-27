# Started Next App

- `npx create-next-app@latest --use-npm`
- create 'jsconfig.json' then write:

```
{
    "compilerOptions": {
        "baseUrl": "src",
        "paths": {
           "@pages": ["pages/"],
        }
    }
}
```

Esto servirá para que la carpeta/url base de neustro proyecto sea la carpeta pages que acabamos de crear.

- create 'eslintignore' for ignore the node_modules folder.
- rename 'eslintrc.json' to 'eslintrc.js' that so can export as module. then write the following script:

```
module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': ['error', 'always'],
  }
}
```

- creater 'prettier.config.js' and write the following script:

```
module.exports = {
    semi: true,
    singleQuote: true,
    printWidth: 200,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    bracketSpacing: true,
}
```

- install de dependencies:
  `npm i prettier eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-config-prettier eslint-config-next`.
- add the configure in 'next.config.js'.

```
module.exports = {
reactStrictMode: true,
env: {
customKey: ‘customValue’,
},
basePath: ‘/dist’,
compress: true,
async redirects() {
return [
{
source: ‘/hola’,
destination: ‘https://gndx.dev’,
permanent: true,
}
]
}
}
```

- Se hizo la migracion de la carpeta 'src' del proyecto en react, dentro de esta carpeta se renombro la carpeta pages por templates, para asi evitar conflictos. La carpeta original del proyecto nextjs se renombro por src2.
- Se integraron los elementos de src2 en src.
- se elimina el index.js
- en el index.js de pages se agrega el codigo inicial.

```
import React from 'react';
import Header from '@components/Header';

export default function Home() {
  return (
    <>
    <Header />
    </>
  )
}

```

- se agrega el alias en jsconfig.json.
- instalar sass : `npm install sass`.
- se cambian los stilos del header a .module.
- se modifican las variables.
- elimina la mayoria de next.config.js

```
modu`le.exports = {
  reactStrictMode: true,
}
```

- Se agrega el context y el initial state en el '\_app.js'.

```
import '@styles/globals.css';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState} >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp

```

- Para que las imagenes funcionen correctamente tenemos que llamar a 'next/image' y usarlo en vez de la etiqueta img.
- Se mueve el componente header a '\_app' y se agrega el productlist a 'index.js'.
- se hizo el mismo proceso de terminar de optimizar los modulos de stilos en productList y productItem.
- se integro el checkout a 'pages' y se optimizaron los estilos.
- se implemento el Link para conectar los componentes
- se crea el archivo '\_document.js' en pages, que es donde se vaa a plasmar toda la imformacion de las paginas de la aplicacion, es importante para el uso de metadatos.

```
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

# === se agrego GA ===

se agrego lo siguiente al head en '\_document.js':

```
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-FCTH9JWM9X"></script>
        <script dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-FCTH9JWM9X');

```

# == Preparando el deploy a produccion ==

- se agrega el siguiente escript a al package.json: `"lint:fix": "eslint src/ --fix"`
- se corrigen los errores
- se modifica la configuracion de eslint '.eslintrc.js' para los errores /prettier/prettier.
- se corrigen el resto de errores y se hace el build.

# == Convirtiendo en PWA ==

- se instala `npm i next-pwa`.
- se agrega la siguiente configuracion a "nex.config.js":

```
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space']
  }
})
```

- Se agrega el manifest en la carpeta public.

# == Exportar proyecto como estatico (SSG) ==

- se agrega el siguiente script al 'package.json': `"export": "next build && next export"`

# == Integracion de la Product Page ==

- Se crea la carpeta product y en ella el '[id].js', para lograr capturar el id del articulo y hacer el llamado a la API.

```
const { query: { id } } = useRouter();
```

- Se le pasa el id por props al componente 'ProductInfo.jsx' y se hace el llamado a la API.

```
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import Link from 'next/link';

const ProductInfo = ({ id }) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			})
			.catch((err) => {
				console.log('error :' + err);
			});
	}, [id]);

	// ---
```

# == Integracion del componente login ==

- Se creo la pagina de login.
- Se agrega el handleSubmit:

```
 const handleSubmit = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(user + password);
    }
```

# == Presentacion de la API ==

- se crea el directorio services, luego el directorio api y su respectivo index.js:
- /services/api/index.js

```
const API = 'https://api.escuelajs.co';
const VERSION = 'v1';

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getAllProducts: `${API}/api/${VERSION}/products`,
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`
    },
    users: {
        getUsers: `${API}/api/${VERSION}/users?limit=10`,
        getUserAvailable: `${API}/api/${VERSION}/users/is-available`
    },
    files: {
        getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`
    }
}

export default endPoints;
```

# == Creación del custom hook useAuth ==

1. Se instala 'js-cookie' y 'axios': `npm install js-cookie axios`;
2. Se crea el context en el directorio context/AuthContext:

```
const { createContext } = require("react");

const AuthContext = createContext();

export default AuthContext;
```

3. Se crea el hook useAuth.js:

```
import React, { useContext, useState } from 'react';
import AuthContext from '@context/AuthContext';

export function ProviderAuth({ children }) {
    const auth = useProviderAuth();
    return (
        <AuthContext.Provider value={auth} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

const useProviderAuth = () => {
    const [user, setUser] = useState(null);
    const signIn = async (email, password) => {
        setUser('landing')
    }

    return {
        user,
        signIn
    }
}

export default useAuth;
```

4. Se agrega el provider al '\_app.js' conectandolo asi con toda la aplicacion:
   -pages/\_app.js

```
function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <ProviderAuth>
        <AppContext.Provider value={initialState}>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FCTH9JWM9X"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-FCTH9JWM9X');
      `}
          </Script>
          <Header />
          <Component {...pageProps} />
        </AppContext.Provider>
      </ProviderAuth>
    </>
  );
}
```

# == Autenticándonos en la API usando Axios ==

1. Se agrega la lectura del access_token con axios para posteriormente agregarla a la cookie.

- Con axios.post se pueden pasar tres parametros principales: 1er. La solicitud a la Api a consumir, 2do. Los datos o parametros a enviar 3ro. La configuracion de la solicitud.

- En este caso se utilizan los services(auth.login) para la solicitud, Los datos a enviar son el email y el password, y para la configuracion de la solicitud se crea la siguiente constante:

```
const useProviderAuth = () => {
    const [user, setUser] = useState(null);
    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        };
        //==Lectura del AccessToken que viene desde la api, para posteriormente agregarla a una cookie
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
        console.log(access_token);
    };
```

2. Se importa 'useAuth' en el componente de login page para trabajar la logica:

- /component/LoginPage.jsx

```
 const handleSubmit = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        auth.signIn(user, password).then(
            () => {
                console.log('login success');
                router.push('/checkout')
            }
        )
        console.log(user + password);
    }
```

== Obteniendo el token de la API ==

1. Se hace la validacion si tenemos el access_token

- Agregamos la informacion obtenida a una cookie con Cookies.set(), en el cual le pasaremos 3 parametros, el primero sera el nombre (string), el segundo sera el valor (access_token) , y el tercero sera la duracion ({expire}).
- Se agrega el estado de error .

- /useAuth.js

```
const useProviderAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        }
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
        if (access_token) {
            Cookies.set('token', access_token.access_token, { expires: 5 });
        }
        console.log(access_token);
    };
```

2. Se agrega la logica en el login page :

```
const handleSubmit = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        auth.signIn(user, password).then(
            () => {
                auth.setError(false);
                console.log('login success');
                router.push('/checkout')
            },
            (err) => {
                console.log("Error" + err);
                auth.setError(true);
            }
        )
        console.log(user + password);
    }
```

# == Guardado del token en una cookie para mantener la sesión ==

1. Se hace el llamado al servidor para obtener los datos del usuario mediante el envio del token en los headers del llamado:
2. Luego se guardan en el setUser.

- /hooks/useAuth.js

```
const useProviderAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        }
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
        if (access_token) {
            Cookies.set('token', access_token.access_token, { expires: 5 });
        }

        axios.defaults.headers.Authorization = `Bearer ${access_token.access_token}`;
        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
        console.log(user);
    };
```

# == Implementacion del componente Chart ==

1. Se instalan los plugins: `npm i chart.js react-chartjs-2`.
2. Se crea el componente chart en el directorio 'components':

- /components/Chart.jsx:

```
import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ ChartData }) => {
    return (
        <>
            <Bar
                data={ChartData}
                options={{
                    title: {
                        display: true,
                        text: "Category",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    }
                }}

            />
        </>
    )
}

export default Chart
```

# == Integracion del componente chart ==

1. Se crea la pagina 'dashboard' para poder ver todas nuestras compras luego del checkout.
2. Se crea el componente 'Dashboard' en component.

- /components/Dashboar.jsx

```
import AppContext from '@context/AppContext'
import React, { useContext } from 'react'
import styles from "../styles/Dashboard.module.scss";
const Dashboard = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    return (
        <>
            <section className={styles.Dashboard}>
            <h2>Dashboard</h2>
                <div className={styles['Dashboard-List']}>
                <p>Shopping Items: {cart.length}</p>
                    {cart.map((item) => (
                        <div key={item.id} className={styles['Dashboard-List-Item']}>
                        <p><span>Name:</span> {item.title}</p>
                        <p><span>Price:</span> {item.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Dashboard
```

3. Se agrega el componente chart en el dashboard:

```
 <Chart chartData={data} className="mb-8 mt-2" />
```

4. Se crea la constante data que es un objeto que contiene el dataset con los siguientes parametros parametros:

```
const data = {
    datasets: [
      {
        label: 'Cateogires',
        data: ['others', 'clothes'],
        borderWidth: 2,
        backgroundColor: ['#324485', '#723285', '#7d2056', '#2c7a3d'],
      },
    ],
  };
```

5. Se agrega la logica para poder mostrar los datos en la grafica:

- Para obtener las categorias de los productos:

```
  const categoryName = cart?.map((product) => product.category);
  const categoryCount = categoryName?.map((category) => category.name);
```

- Se agrega el contador de ocurrencias:

```
const countOccurencies = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {});
```

- Se agrega al data:

```
 const data = {
    datasets: [
      {
        label: 'Cateogires',
        data: countOccurencies(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#324485', '#723285', '#7d2056', '#2c7a3d'],
      },
    ],
  };
```

# == Creacion del componente modal ==

1. Se creo el componente modal con su respectivo modulo de estilo:

- /components/Modal.jsx

```
import React from 'react';
import styles from "../styles/Modal.module.scss";

const Modal = ({ children, close }) => {

    return (
        <>
            <section className={styles.Modal}>
                <div className={styles.ModalContainer}>
                    <button type='button' onClick={() => close(false)} className={styles.ModalExit}>X</button>
                    {children}
                </div>
            </section>

        </>
    )
}

export { Modal }
```

- /styles/Modal.module.scss

```
@import './vars';

.Modal{
    background-color: rgba(38, 38, 38, 0.609);
    z-index: 10;
    width: 100vw;
    height: 100vh;
    position: fixed;
}
.ModalContainer{
    margin: 10vh 10vw 10vh 10vw;
    background-color: $--white;
    padding: 20px;
    position: relative;
}

.ModalExit{
    position: absolute;
    top:0;
    right: 2px;
    color: red;
}
```

# == Contruccion del componente FormProduct ==

1.  Se crea el componente:

- /components/FormProduct.jsx

```
import React from 'react';
import styles from "../styles/FormProduct.module.scss";

const FormProduct = () => {
   return (
       <section className={styles.FormProduct}>
           <form action="/" >
               <label htmlFor="title" >
                   Title
               </label>
               <input
                   type="text"
                   name="title"
               />
               <label htmlFor="price" >
                   Price
               </label>
               <input
                   type="number"
                   name="price"
               />
               <label htmlFor="password">
                   Category
               </label>
               <select
                   id="category"
                   name="category"
                   autoComplete="category-name">
                   <option value="1">Clothes</option>
                   <option value="2">Electronics</option>
                   <option value="3">Furniture</option>
                   <option value="4">Toys</option>
                   <option value="5">Others</option>
               </select>
               <label
                   htmlFor="description"
               >
                   Description
               </label>
               <textarea
                   name="description"
                   id="description"
                   autoComplete="description"
               />
               <button type='button' className={styles['FormProduct-button']} >
                   Add
               </button>
           </form>
       </section >
   )
}

export default FormProduct
```

2. Se agrega el componente al dashboard como hijo del modal.

- /containers/Dashboard.jsx

```
 return (
        <>
            {open && <Modal close={setOpen}><FormProduct /></Modal>}
```

3. Se agrega el ref al form para poder capturar toda la informacion que se obtenga en el formulario.

- /components/FormProduct.jsx

```
  const formRef = useRef(null);
```

4. Se crea el handleSubmit que permite recibir la informacion y enviarla a la estructura:

```
  const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            "title": formData.get('title'),
            "price": parseInt(formData.get('price')),
            "description": formData.get('description'),
            "categoryId": parseInt(formData.get('category')),
            "images": [
                formData.get('images')
            ]
        }
        console.log(data);
    }
```

- El event.preventDefault permite prevenir las acciones por defecto del html.
- Con el formData se encapsulan los datos.
- El data es parte del estandar de la api, y se esta utilizando para destrucutrar la informacion.

# == Inserción de los datos del producto en la API ==

1. Se crea el servicio que se va a encargar de enviar los productos a la API.
2. Se crea la funcion asincrona addProduct, la cual recibe un body es decir la estrcutura o cuerpo de la informacion que se recibe.
3. En dicha funcion se crea el objeto 'config' que tiene toda la estructura de configuracion, como el header.

```
 const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };

```

4. Se crea la constante 'response' en el cual tiene el metodo axios.post en el que se hace el envio de la informacion:

```
const response = await axios.post(endPoints.products.addProducts, body, config);
```

5. Se retorna la informacion con response.data ya que es la estructura que regresa axios.

- /services/api/product.js

```
import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.products.addProducts, body, config);
    return response.data
};

export { addProduct };

```

6. Se importa en el componente 'FormProduct' y se consume pasandole la data de dicho formulario.

- /component/FormProduct.jsx

```
const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            "title": formData.get('title'),
            "price": parseInt(formData.get('price')),
            "description": formData.get('description'),
            "categoryId": parseInt(formData.get('category')),
            "images": [
                formData.get('images')
            ]
        }
        addProduct(data).then((response) => {
            console.log(response);
        })
    }
```

# == Creación del componente Alert ==

1. Se crea el componente 'alert.jsx' que recibe dos parametros el alert y el handleClose.

- /components/Alert.jsx

```
import React from 'react';
import styles from '@styles/Alert.module.scss';

const Alert = ({ alert, handleClose }) => {
    return (
        <section className={styles.Alert}>
            <div className={styles['Alert-content']}>
                <p>{alert.message}</p>
            </div>
            <button type="button" className={styles['Alert-button']} onClick={handleClose}>
                X
            </button>
        </section>
    );
};

export { Alert };
```

2. Se crea la logica para que se cierre automaticamente:
3. Se agrega la validacion para saber si el alert esta activo y asi mostrar la estructura

```
import React from 'react';
import styles from '@styles/Alert.module.scss';

const Alert = ({ alert, handleClose }) => {
    if (alert && alert?.autoClose) {
        setTimeout(() => {
            handleClose();
        }, 9000)
    }

    return (
        <>
            {alert.active && (
                <section className={styles.Alert}>
                    <div className={styles['Alert-content']}>
                        <p>{alert.message}</p>
                    </div>
                    <button type="button" className={styles['Alert-button']} onClick={handleClose}>
                        X
                    </button>
                </section>
            )}
        </>

    );
};

export { Alert };

```

4. Se crea el customHook useAlert.js, que contiene los defaultOptions, y el togleAlert.

```
import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });
  const togleAlert = () => {
    setAlert(!alert.active);
  };

  // ---
  return {
    alert,
    setAlert,
    togleAlert,
  };
};

export default useAlert;

```

5. Se integra el alert en el dashboard

```
...
...
import { Alert } from '@components/Alert';
import useAlert from '@hooks/useAlert';

const Dashboard = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    const [open, setOpen] = useState(false);
    const { alert, setAlert, togleAlert } = useAlert();

    const handleModal = () => {
        setOpen(true);
    };

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };
    const categoryName = cart?.map((product) => product.category);
    const categoryCount = categoryName?.map((category) => category.name);
    const countOccurencies = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

    const data = {
        datasets: [
            {
                label: 'Categories',
                data: countOccurencies(categoryCount),
                borderWidth: 2,
                backgroundColor: ['#324485', '#723285', '#7d2056', '#2c7a3d'],
            },
        ],
    };
    //---
    return (
        <>
            {open && (
                <Modal close={setOpen}>
                    <FormProduct setAlert={setAlert} />
                </Modal>
            )}
            <section className={styles.Dashboard}>
                <Alert alert={alert} handleClose={togleAlert} />
                <h2>Dashboard</h2>
                <p>
                    <span>Shopping Items:</span> {cart.length}
                    ...
                    ...
                    ...
                    ...
```

# == Implementación de nuestro componente Alert ==

1. En formProduct, en la funcion addProduct se hace el llamado a setAlert() y el setOpen:

- /components/FormProduct.jsx

```
addProduct(data)
            .then(() => {
                setAlert({
                    active: true,
                    message: 'Product added succesfully',
                    type: 'success',
                    autoClose: true,
                });
                setOpen(false);
            })
            .catch((err) => {
                setAlert({
                    active: true,
                    message: err.message,
                    type: 'error',
                    autoClose: true,
                });
            });
```

# == Eliminado de productos en la API ==

1. Se crea el servicio en product.js

- /services/products.js

```
const deleteProduct = async (id) => {
    const response = await axios.delete(endPoints.products.deleteProduct(id));
    return response.data;
};
```

2. Se crea el handleDelete en el componente 'productItem.jsx' y se agrega al boton de eliminar:

- /components/ProductItem.jsx

```
const handleDelete = (id) => {
		deleteProduct(id).then(() => {
			setAlert({
				active: true,
				message: 'Delete product successfully',
				type: 'error',
				autoClose: true,
			});
		})
	};

```

3. Se agrega el alert en el 'ProductList'.

# == Creación y cargado de datos para actualizar un producto ==

1. Se crea el directorio dashboard en pages, entoces la pagina llamada 'dashboars.js' pasa a ser el 'index.js' de dicho directorio, posteriormente se crea el directorio edit con un '[id].js':

- Pagina dashboard: /pages/dashboard/index.js
- Pagina edit: /pages/dashboard/edit/id

2. En la pagina edit se obtiene el id del producto que se manda mediante la url, y se lee mediante el useEffect

- /pages/dashboard/edit/id:

```
import React, { useEffect } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';

const Edit = () => {
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query;
        console.log(id);
    }, [router?.isReady]);

    return (
        <>
            <FormProduct />
        </>
    );
};

export default Edit;

```

3. Posteriormente se agrega el llamado a la API en el useEffect con axios:

```

    useEffect(() => {
        const { id } = router.query;

        async function getProduct() {
            const response = await axios.get(endPoints.products.getProduct(id));
            setProduct(response.data);
        };
        getProduct();
    }, [router?.isReady]);
```

4. Se le pasa el product a FormProduct median props para consumirlo en los defaultValues de los inputs.

# == Actualizado del producto en la API ==

1. Se agrega una validacion en el handleSubmit de formProduct para saber si es addProduct o editProduct:

- /components/FormProducts

```
const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            title: formData.get('title'),
            price: parseInt(formData.get('price')),
            description: formData.get('description'),
            categoryId: parseInt(formData.get('category')),
            images: [formData.get('images').name],
        };

        if (product) {
            console.log(data);
        } else {
            addProduct(data)
                .then(() => {
                    setAlert({
                        active: true,
                        message: 'Product added succesfully',
                        type: 'success',
                        autoClose: false,
                    });
                    setOpen(false);
                })
                .catch((err) => {
                    setAlert({
                        active: true,
                        message: err.message,
                        type: 'error',
                        autoClose: false,
                    });
                });
        }

    };
```

2. Se crea la funcion updateProduct en /servicio/product.js

```
const updateProduct = async (id, body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.products.updateProduct(id), body, config);
    return response.data;
};
```

3. Se agrega el updateProduct en la validacion del handleSubmit.

4. Se agrega el router.push a donde se quiera regirigir luego de hacer el update, en este caso es '/'.

```
...
...
        if (product) {
             updateProduct(product.id, data).then(() => {
               router.push('/');
            });
        } else { ...
```

# == Implementación del logout ==

1. Se crea la funcion en el hook useAuth:

- /hooks/useAuth

```
  const logout = () => {
        Cookies.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
       router.push('/');

    }
```

2. Se utiliza en el boton de log out del menu.

# == Creacion de la pagina sendOrder ==

1. Se crea el directorio en pages, y el componente.

# == Modificacion del Dashboard ==

1. Se modifico la logica del dashboard, ya que no tenia sentido tener solo los articulos del cart, por lo que ahora se hace el llamado a la api en el mismo componente y se consume.

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Dashboard.module.scss';
import Image from 'next/image';
import Chart from '@components/Chart';
import { Modal } from '@components/Modal';
import FormProduct from '@components/FormProduct';
import { Alert } from '@components/Alert';
import useAlert from '@hooks/useAlert';
import endPoints from '@services/api';
import Link from 'next/link';
import placeholder from 'assets/icons/placeholder.jpg';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import { deleteProduct } from '@services/api/product';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const { alert, setAlert, togleAlert } = useAlert();

    const handleModal = () => {
        setOpen(true);
    };

    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(endPoints.products.getAllProduct);
            setCart(response.data);
        }
        try {
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }, [alert]);



    // Para obtener la suma de todos los precios de articulos
    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        const sumAverage = parseInt(sum / cart.length);
        return sumAverage;
    };
    // Para obtener las categorias de los articulos del cart
    const categoryName = cart?.map((product) => product.category);
    const categoryCount = categoryName?.map((category) => category.name);
    // Contador de Ocurrencias para obtener las veces que se repiten los articulos
    const countOccurencies = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

    const data = {
        datasets: [
            {
                label: 'Categories',
                data: countOccurencies(categoryCount),
                borderWidth: 2,
                backgroundColor: ['#324485', '#723285', '#7d2056', '#2c7a3d'],
            },
        ],
    };

    const handleDelete = (id) => {
        deleteProduct(id).then(() => {
            setAlert({
                active: true,
                message: 'Delete product successfully',
                type: 'error',
                autoClose: true,
            });
        })
    };

    //---
    if (cart.length > 1) {
        return (
            <>
                {open && (
                    <Modal close={setOpen}>
                        <FormProduct setOpen={setOpen} setAlert={setAlert} />
                    </Modal>
                )}
                <section className={styles.Dashboard}>
                    <Alert alert={alert} handleClose={togleAlert} />
                    <h2>Dashboard</h2>
                    <p>
                        <span>Shopping Items:</span> {cart.length}
                    </p>
                    <p>
                        <span>Average per item:</span> ${sumTotal()}
                    </p>
                    <button type="button" onClick={() => handleModal()} className={styles['Dashboard-AddButton']}>
                        Add Product
                    </button>
                    <div className={styles['Dashboard-chart']}>
                        <Chart chartData={data} />
                    </div>
                    <div className={styles['Dashboard-List']}>
                        {cart.map((item) => (
                            <div key={item.id} className={styles['Dashboard-List-Item']}>
                                {item.images[0]
                                    ?
                                    <Link href={`/product/${item.id}`}>
                                        <Image src={item.images[0]}
                                            width={50}
                                            height={50}
                                            alt={item.title}
                                            loader={() => item.images[0]}
                                            unoptimized={true}
                                            loading='lazy'
                                        /></Link>
                                    :
                                    <Link href={`/product/${item.id}`}>
                                        <Image src={placeholder}
                                            width={50}
                                            height={50}
                                            alt={item.title}
                                            loader={() => item.images[0]}
                                            unoptimized={true}
                                            loading='lazy'
                                        /></Link>}
                                <p> {item.id}</p>
                                <p>${item.price}</p>
                                <p>{item.category.name}</p>
                                <Link href={`/dashboard/edit/${item.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        );
    } else {
        return <ProductListSkeleton />
    }

};

export default Dashboard;
```

# == Creacion de paginas, password, recovery y create account ==

1. Se integraron las platillas de templates.

# == Creacion del filtro de productos ==

1. Se crea el estado de search para posteriormente consumirlo en inputRef y el handleSearch en el customHook "useInitialState.js":

- /hooks/useInitialState.js

```
  // filtro de productos (buscador)
  const inputRef = useRef(null);

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  }

```

2. Se agrega el input al header:

- /components/Header.jsx

```
<div className={style.search}>
		<input type='text' placeholder='Search' value={search} onChange={handleSearch} ref={inputRef} />
</div>
```

3. Se agrega la siguiente logica en ProductList:

- /containers/ProductList.jsx

```
	const filteredProducts = products.filter((filteredProduct) => (
		  filteredProduct.title.toLowerCase().includes(search.toLowerCase())
		));
```

- search es traido del AppContext.
- filteredProducts es ahora lo que se mapea.

# == Modificacion de la logica de login ==

1. Se modifico la logica de la funcion sign In del useAuth, para que obtuviera el token de la cookie y automaticamente lo utilice para hacer el llamado del usuario y al renderizar cada una de las paginas de la aplicacion de hace el llamado a la funcion signIn().

- hooks/useAuth.js

```
const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        }
        if (email, password) {
            const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
            if (access_token) {
                const token = access_token.access_token;
                Cookie.set('token', token, { expires: 10 });

                axios.defaults.headers.Authorization = `Bearer ${token}`;
                const { data: user } = await axios.get(endPoints.auth.profile);
                setUser(user);
            }
        } else {
            const token = Cookie.get('token');
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            const { data: user } = await axios.get(endPoints.auth.profile);
            setUser(user);
        }
    };
```

# == Integracion de las paginas de categorias ==

1. Se creo la page.

- pages/categories/[id].js

```
import React from 'react';
import { useRouter } from 'next/router';
import useAuth from '@hooks/useAuth';
import { CategoryProducts } from '@containers/CategoryProducts';


const CategoryPage = () => {
    const { query: { id } } = useRouter();
    const auth = useAuth();
    auth.signIn();
    return (
        <>
            <CategoryProducts id={id} />
        </>
    )
}

export default CategoryPage;
```

2. Se creo el container 'CategoryProducts'

- containers/CategoryProducts.jsx

```
import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import endPoints from '@services/api';
import axios from 'axios';
import styles from '../styles/CategoryProducts.module.scss';
import { ProductListSkeleton } from '@components/ProductListSkeleton';

const CategoryProducts = ({ id }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            if (id) {
                const response = await axios.get(endPoints.categories.getCategoryItems(id));
                setProducts(response.data);
                console.log(response.data);
            } else {
                return null;
            }
        }
        try {
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    if (products[0]?.category.id == id) {
        return (
            <section className={styles['main-container']}>
                <h2><span>Category: </span>{products[0]?.category?.name}</h2>
                <div className={styles.ProductList}>
                    {products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>

            </section>
        );
    } else {
        return (
                <ProductListSkeleton />
        )

    }

};

export { CategoryProducts };

```

# Validator Login

- Se agrego la siguiente logica al handleClick del `ProductItem`:
- /src/components/ProductItem

```
const handleClick = (item) => {
		if (auth.user) {
			console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
		} else {
			router.push('/login');
		}
	};
```
