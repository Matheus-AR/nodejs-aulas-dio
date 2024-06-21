# nodejs-aulas-dio

# Notas
- Posso exportar funções e constantes
- Módulos commonjs são usados em projetos JS, arquivos de configuração a parte (constantes), lógica de componente a parte e criar bibliotecas genéricas.


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

## Gerenciando pacotes com Node

### Introdução
- Como gerenciar pacotes do node
- O que é um pacote
- Quem é o npm
- Quando um pacote vira uma dependência

### Pré-requisitos
- Lógica de programação
- JS básico
- Entender o que é Node
- Conceitos de modularização de código

### Teoria sobre Pacotes e dependências
- Node Package Manager: gerenciador de pacotes do node
- ajudar a gerenciar os pacotes js do node
#### O que é um pacote(package)?
- package na programação: 
- corrigir propagação de erros
- empacotar partes do código para reutilizar em outros projetos

#### Dependências(dependencies)
- um pacote vira uma dependência quando ele está sendo usado em um projeto
- o projeto novo depende de um pacote que está na nuvem

#### Npmjs Repository
- onde fica todos os pacotes que são usados como dependencias

#### DevDependencies
- dois tipos de dependencias:
    1. dependency(dependencia)
    2. dev dependency(dev dependencia)
- só tem utilidade no ambiente de dev (desenvolvimento)
- no ambiente de produção ela é descartada

#### Gerenciadores
- nuget: dotnet
- maven e gradle: java
- pip: python
- npm: nodejs (instalado por padrão)
- yarn: nodejs (alternativas ao npm)
- pnPm: nodejs