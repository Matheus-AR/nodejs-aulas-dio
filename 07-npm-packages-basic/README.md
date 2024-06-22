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
