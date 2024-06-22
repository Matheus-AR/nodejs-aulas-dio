## Gerenciando Variáveis de Ambiente com NPM

- isolar dados sensiveis

### Pré-requisitos
- [x] Lógica de programação
- [x] Javascript básico
- [x] Entender o que é Node
- [x] Conceitos de modularização
- [x] Entender o que é npm, packages e dependencies
- [x] Saber o que é Npm Scripts

### O problema
- tudo concentrado em um ambiente só. Dados seníveis desprotegidos
- proteger dados sensíveis
- guardar os dados sensíveis em outro compartimento
- descentralização de ambiente

- Aplicação em um ambiente público onde outras aplicações podem acessar
- Compartimento seguro onde ficam dados sensíveis(senha de banco, tokens, chaves de api e números de configs geral). Arquivo dotenv. Mantenha os dados seguros

### Prática
- criar um arquivo .env
- no arquivo .env coloco quais as variáveis de ambiente com seus valores
- adiciona o .env ao .gitignore
- para conseguir fazer a aplicação enxegar as variáveis de ambiente
    1. node --env-file=.env --watch src/index.js
- para usar uma variavel de ambiente
    1. process.env.VARIAVELAMBIENTE
- Multiple Dotenv
    1. .env.prod (variaveis de produção)
    2. env.development (variaveis de dev)
- para versões de node abaixo da 20
    1. instalar o dotenv: npm i dotenv
    2. importar o dotenv: import dotenv;

