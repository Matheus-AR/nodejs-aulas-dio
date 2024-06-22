## Modularização com EcmaScript Modules

### Diferenças entre CommonJS e EcmaScript Modules

| CommonJS (cjs)  | EcmaScript Modules (ESM) |
| ------------- | ------------- |
| Sincrono  | Assincrono  |
| Principal: Servidor(node.js)  | Suportado em navegadores |
| 'require' e 'module.exports' | 'import' e 'export' |
| Carregamento dinâmico | Carregamento estático |

### Habilitar o padrão ESM

- Adicionar uma feature flag ao package.json:
    - "type": "module",
- Por padrão a feature flag type é:
    - "type": "commonjs",

### Exportando função por padrão

- export default <nomeDaFuncao>

### Importando função
- import 'função' from 'caminho-do-modulo'
- obs.: no caminho do módulo deve ser especificado a extensão. Tem que especificar qual arquivo está trabalhando

### Mjs
- indica que é um só um módulo para exportar funções.

### Multiplos exports
- Pode ser usado:
    1. module.exports = {};
    2. export = {};

### Importar tudo
- import * as 'nome-qualquer' from 'caminho-do-modulo'

### Destruturação (destructuring)
- import { nome-da-função } from "caminho-do-modulo"

### Exportando constantes (export const)
- export = { nome-da-const }

### Exportar diretamente (direct export)
- export const nomeConst = () => {};
- obs.: deve quardar a função em uma função const

### Alguns padrões
- .cjs: é o padrão antigo, o commonjs.
- .mjs: é o padrão do esm.
