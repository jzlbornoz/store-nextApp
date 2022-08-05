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

== Preparando el deploy a produccion ==

- se agrega el siguiente escript a al package.json: `"lint:fix": "eslint src/ --fix"`
- se corrigen los errores
- se modifica la configuracion de eslint '.eslintrc.js' para los errores /prettier/prettier.
- se corrigen el resto de errores y se hace el build.

== Convirtiendo en PWA ==

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

== Exportar proyecto como estatico (SSG) ==

- se agrega el siguiente script al 'package.json': `"export": "next build && next export"`

== Integracion de la Product Page ==

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

== Integracion del componente login ==

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

== Presentacion de la API ==

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
