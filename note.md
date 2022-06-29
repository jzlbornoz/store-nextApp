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