# Como a web funciona?

## Introdução

### Teoria sobre aplicações web

### Como a web funciona?
Entender como a web funciona.

acesso a url: endereço na internet

url + recurso

troca de dados (comunicação)

### Client X Server
Relação cliente e servidor

Aplicação é um serviço: entregando algum serviço.

O client consume o que o server produz

O server produz os dados

Os clients consomem os dados produzidos pelo server.

### Backend e Frontend
As ferramentas que estão no lado do servidor são o backend. Aplicação  + comunicação de banco de dados

Camada de visualização é chamada de frontend.

## Principais termos de aplicações web
- Fundamentos Web
    1. Momentos de uma aplicação
        1. localhost: aplicação só existe na sua máquina
        2. server:
            1. é a camada do backend. Onde fica as regras de negócios e serviços que a sua aplicação faz
            2. Servir os dados
            3. Comunicar e integrar com outros backend, integração com ferramentas de IA, sistemas de BD
        3. client: camada de quem consome os dados do servidor
            1. front-end
            2. mobile
        4. cloud
            1. onde publica a aplicação
            2. exemplos
                1. aws
                2. gcp
                3. oracle cloud
                4. vercel
                5. railway
            3. deploy: publicar a sua aplicação na internet usando alguma ferramenta
    2. Tipos de aplicação
        1. Aplicação CRUD
            1. 4 funcionalidades (create, read, update e delete)
            2. aplicação que implementa essas funcionalidades
        2. Web services
            1. aplicação com um conj de serviços de uma aplicação programadas em uma mesma solução
        3. Microsserviços
            1. aplicações menores que são especiais em pequenas partes
        4. Monolito
            1. aplicações que comportam dentro delas toda estrutura, o back-end com todos os serviços e o front-end e muitas vezes até o front-end junto
    3. Frameworks e bibliotecas
        1. Bibliotecas
            1. Conj de ferramentas e funções
            2. resolve tarefas especificas
            3. controle de quando e de como usar biblioteca
        2. Frameworks
            1. estrutura base e conj de regras para construir seu projeto
            2. orienta a forma para construir como vc organiza e desenvolver seu código
        3. exemplos
            1. nodejs + express
            2. ruby + Ruby on Rails
            3. Java + springboot
            4. dotnet + aspnet
    4. Repositórios (repo)
        1. ambiente online de compartilhamento e versionamento de código
        2. github
        3. bitbucket
        4. gitlab
    5. Monorepo
        1. Quando sua aplicação backend e frontend estão salvas em um mesmo repositório(mesmo que sejam diferentes aplicações)
        2. aproveitar integração, fazer check de validação, limitação de ambiente.
    6. CI & CD
        1. CI - Continuous Integration
            1. processo
            2. atualizações de software são automaticamente testadas e preparadas para serem lançadas em produção
            3. o software pode ser disponibilizado a qualquer momento
        2. CD - Continuous Deployment
            1. passo além da entrega contínua
            2. as mudanças de software são preparadas e efetivamente lançadas em produção automaticamente, sem intervenção humana, assim que passam pelos testes.
    7. Domínio de aplicação
        1. refere-se ao conjunto de todos os valores possíveis que uma variável pode assumir em um determinado contexto ou sistema
        2. contexto da aplicação
    8. Livros recomendados
        1. Microsserviços prontos para a produção - susan j fowler
        2. Estrutura de dados e algoritmos com javascript - loiane groner
        3. APIs - a Strategy Guide