# Typescript para Nodejs

# Introdução a Typescript e Supersets

## Introdução
- Qual a relação de TS e JS?

## Pré-requisitos
- Lógica de programção
- Javascript Básico
- O que é Node
- Conceitos de modularização de código
- O que é NPM, packages e dependencies
- O que são os NPM Scripts

### Teoria
- site oficial do TS: typescriptlang.org
- TS é JS com sintaxe de tipos
- fortemente tipada
- Adiciona sintaxe ao JS
- TS detecta erros
- Código TS é convertido em em JS, que funciona em qualquer lugar que o JS é executado.
- TS entende JS
- TS usa inferencia de tipos para fornecer ótimas ferramentas sem código adicional
- JS = Programação dinâmica, assíncrona e funcional
- TS = Programação dinâmica, assíncrona e funcional + Superset(tipagem, interfaces, decoradores e outros)

### Problemas que o TS resolve
- Problema principal: Projeto sem tipagem

### Transpile
- Combinção = translate + compilar
- o TS é traduzido para JS e compilado tudo em JS
- TS só faz sentido no desevolvimento

### Errors compile-time x runtime
| Compile-time | Runtime |
| ------------ | ------- |
| Erros produzidos em tempo de compilação e são detectados pelo compilador | Erros que não são gerados pelo compilador e produz um resultado inesperado em tempo de execução |
| O compilador prevê a execução do código se ele detecta um erro no programa | O compilador não detecta erro, ele também não preveni o código da execução |
| Contém erros de syntax e semantica tais como falt de ponto e vírgula no fim da declaração | Contém erros tais como divisão por zero, determina a raiz quadrada de número negativo |

### Quando usar
- Quando é um projeto muito pequeno não é necessário usar TS
- Quando é um projeto de grande porte o TS pode ser usado como uma trava de segurança

### Documentação
- typescriptlang.org


# Configurar Typescript em projetos Nodejs
## O que vou aprender
- Instalar o pacote do TS
- Como usar o TS em uma aplicação Node
- Configurar o tsconfig

## Pré-requisitos
- Lógica de programação
- JS Básico
- O que é Node
- Conceitos modularização
- O que é NPM, packages e dependencies
- O que são Npm scripts
- O que é TS

## Prática
### Setup
- iniciar projeto: npm init -y
- criar: index.js
- criar script no package.json: "start:dev": "node src/index.js"

### Instalar o TS
- npm i -D typescript

### Transpilar o TS
- npx tsc src/index.ts
- ordem: transpila o ts e roda js

### Script translate, compile e run
- "dist": "npx tsc src/index.ts"
- "start": "npm run dist && node src/index.js"

### Criar tsconfig
- npx tsc --init

### Configurar tsconfig
- arquivo de comportamento do TS

### Typescript executable (tsx)
- nodejs só roda arquivos js
- pacote tsx - roda arquivos ts nativamente. transpila e executa na memória

### Documentação tsconfig
- tsconfig references

### npm trends e tsup
- tsup - fazer um bundle. mais performática
- tsup - ferramenta esbuild
- npm trends - quais as tendencias de mercado

### Aprender alguns atalhos - aumentar a produtividade
- npm init -y
- mkdir src
- 'console.log("Hello Matheus")'
- npm i typescript tsx tsup -D
- npx tsc --init
- no arquivo tsconfig, dentro de compilerOptions:
    - "target": "ES6",
    - "module": "CommonJS",
    - "outDir": "./dist",
    - "strict": true,
    - "esModuleInterop": true
- copiar a estrutura de scripts

### one command
- npm init -y typescript -D