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

## Ideias de dependencias no nodejs
- https://firebearstudio.com/blog/node-js-command-line-apps-utilities.html

## Instalar pacote no node
- 2 formas
    1. npm install pacote
    2. npm i pacote

### Manifest Dependencies
- quando uma dependencia é baixada no package.json é adicionado um campo chamado dependencies.
- package.json: arquivo manifest dependencies

### Node_modules
- cada pacote instalado do npm pode ter suas dependencias
- a pasta node_modules é a pasta mais pesada

### Package-lock.json
- cadeia de dependencias e subdependencias e suas respectivas versões
- contém informação para montar as cadeias de dependecias e subdependencias

### .Gitignore
- quando mandar o projeto para um repositório remoto
- ignora tudo o que estiver nesse arquivo

### Restore
- npm install
- npm i
- instalar todas as dependencias e restaura a node_modules

### Usage
- como usar a dependencia
- cada pacote tem uma maneira de usar

### Dev Dependencies
- npm i -D
- instalar pacote como dev dependencie
- as dev dependencies irão aparecer no package.json no campo de devDependencies

### Npm uninstall
- npm i uninstall pacote
- desinstalar um pacote

### Npm fund
- npm fund
- lista todos os links de downloads de onde estão vindo as dependências

### Npm update
- formas de atualizar as dependencias do projeto
    1. desinstalar e reinstalar a dependencia
    2. npm update pacote (verifica se a dependencia está atualizado com a última versão)
- break changes: mudanças que podem gerar quebras
- processo de atualizar dependencias
- verificar se a aplicação funciona como estava funcionando sem a atualização

### Comandos mais usados
- pesquisar por pacotes

## Npm Scripts em Nodejs

### Pré-requisitos
- Lógica de programação
- javascript básico
- entender i que é o node
- conceitos de modularização
- entender o que é npm, packages e dependencies

### O que são NPM Scripts
- condensar comandos node em scripts
- chamar uma sequências de comandos

### Script field

### Npm run script
- npm run test
- rodar um script test
- forma genérica: npm run nomeScript

### Vscode View Npm Script
- usando recursos do vscode

### Create Script
- criar scripts para executar comandos

### Scripts Multi Tasks
- criar scripts para executar mais de um comando

### Scripts Naming
- nomes de scripts mais comuns
    1. prebuild - npm install
    2. start:dev - node src/idnex.js
    3. srtat:watch - node --watch src/index.js

### Scripts Naming GuideLines
