# Started Next App
- `npx create-next-app@latest --use-npm`
- create 'jsconfig.json' then write:
`
{
    "compilerOptions": {
        "baseUrl": "src",
        "paths": {
           "@pages": ["pages/"],
        }
    }
}
`
Esto servirá para que la carpeta/url base de neustro proyecto sea la carpeta pages que acabamos de crear.
- create 'eslintignore' for ignore the node_modules folder.
- rename 'eslintrc.json' to 'eslintrc.js' that so can export as module. then write the following script:
`module.exports = {
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
`
- creater 'prettier.config.js' and write the following script:
`
module.exports = {
    semi: true,
    singleQuote: true,
    printWidth: 200,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    bracketSpacing: true,
}
`
- install de dependencies: 
`npm i prettier eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-config-prettier eslint-config-next`.
- add the configure in 'next.config.js'.
`
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
}`

- Se hizo la migracion de la carpeta 'src' del proyecto en react, dentro de esta carpeta se renombro la carpeta pages por templates, para asi evitar conflictos. La carpeta original del proyecto nextjs se renombro por src2.
- Se integraron los elementos de src2 en src.
- se elimina el index.js 
- en el index.js de pages se agrega el codigo inicial.
`
import React from 'react';
import Header from '@components/Header';

export default function Home() {
  return (
    <>
    <Header />
    </>
  )
}

`
- se agrega el alias en jsconfig.json.
- instalar sass : `npm install sass`.
- se cambian los stilos del header a .module.
- se modifican las variables.
- elimina la mayoria de next.config.js
`
module.exports = {
  reactStrictMode: true,
}
`
- Se agrega el context y el initial state en el '_app.js'.
`
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

`
- Para que las imagenes funcionen correctamente tenemos que llamar a 'next/image' y usarlo en vez de la etiqueta img.
- Se mueve el componente header a '_app' y se agrega el productlist a 'index.js'.
- se hizo el mismo proceso de terminar de optimizar los modulos de stilos en productList y productItem.
- se integro el checkout a 'pages' y se optimizaron los estilos.
- se implemento el Link para conectar los componentes
- se crea el archivo '_document.js' en pages, que es donde se vaa a plasmar toda la imformacion de las paginas de la aplicacion, es importante para el uso de metadatos.
`
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

# === se agrego GA ===
se agrego lo siguiente al head en '_document.js':
`
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-FCTH9JWM9X"></script>
        <script dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FCTH9JWM9X');
    
`
