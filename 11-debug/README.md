# Debygging com Nodejs

## Introdução
- usar o console.log para debugar
- adicionar outras ferramentas para capturar erros

## Pré-requisitos
- [x] Lógica de programação
- [x] Javascript básico
- [x] Entender o node
- [x] Conceitos de modularização de código
- [x] Entender npm, packages e dependencies
- [x] Saber Npm scripts
- [x] Saber typescript
- [x] Executar typescript

## Teoria
### O que é debugging?
- O que é um bug? Algo que está errado no processo que não está permitindo a execução correta.
- Processo de debug: identificar o que está causando os erros na aplicação
- depuração = debugging = debug
- Como identificar os problemas na aplicação

### Por que debugar?
- Para corrigir algum problema no código

### Prática
#### Criar um projeto base
1. mkdir 11-debug (criar pasta)
2. cd 11-debug (mudar para diretório)
3. npm init -y
4. npm i typescript tsx tsup
5. mkdir src (criar pasta)
6. npx tsc --init (criar arquivo tsconfig.json)
7. editar arquivo tsconfig.json
8. definir o target como ES6
9. definir o module CommonJS
10. definir o outDir para ./dist
11. definir o strict como true
12. definir o esModuleInterop como true
13. criar o script no package.json start:dev com tsx /indext.ts

#### Prepara para o modo de debugger
- fazer o código executar linha a linha
- colocar os breakpoints em algumas linhas

#### Debug mode menus

#### Watch e variables

#### Debug mode e launch.json
- para que outras pessoas possam fazer debug da mesma maneira
- criando um arquivo launch.json
- criar um perfil de debug (customização de como o debug deve rodar)

#### Quando usar o debug
- para entender como o projeto executa linha a linha
- procurar problemas no código
- refatorar código
- melhorar código