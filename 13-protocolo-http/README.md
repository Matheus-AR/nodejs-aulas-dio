# Como funciona o Protocolo HTTP?

## O que é?
É um padrão de comunicação<br>
Fazer a aplicação se comunicar usando o http<br>

## Qual o problema o protocolo http resolve?
Padronização na comunicação<br>
As aplicações podem se comunicar por meio de um padrão de comunicação<br>

## Mais sobre o protocolo http
## O que é protocolo http?
É um meio padronizado de comunicação entre duas aaplicações.<br>

## Para que serve o protocolo http?
Usada em aplicações web para fazer duas aplicações conversarem de maneira padronizada.<br>

## Como funciona o protocolo http?

### Request e Response
O http funciona por meio de um padrão de requisições (requests) e respostas (responses).<br>

A aplicação nodejs(server)<br>
A aplicação frontend(client)<br>
O client faz uma requisição (http request) para o server<br>
O server retorna uma resposta (http response) para o client<br>

http request: padrão para solicitar coisas através do http<br>
http response: padrão de envio de dados de resposta do http<br>

http e https: o https tem uma camada de segurança

## Header e Content
- Formato de um request e response
    1. header: configs, observaçoes ou adendos enviados pelo servidor
    2. content: conteudo solicitado pelo usuário

## Métodos de requisição
- Informação que de ve ser mandado no header: request method e status code
- Especifica o tipo de método
- dentro do header deve estar indicado o request method

## Status code
- informa o tipo de resposta(response)
- exitem vários status code
- 1xx informativos
- 2xx sucesso
- 3xx redirecionamento
- 4xx erros no client(client)
- 5xx erros no server(backend)

## Principais status code
- 100 continue
- 102 processing

- 200 ok
- 201 created
- 203 non-authoritstive information
- 204 no content

- 302 found
- 305 use proxy

- 400 bad request
- 401 unauthorized
- 403 forbidden
- 404 not found

- 500 internal server error
- 501 not implemented
- 502 bad gateway
- 503 service unavailable
- 507 insufficient storage

## Content
- conteúdo solicitado pelo usuário
- o conteúdo pode ser:
    1. texto
    2. html
    3. código
    4. arquivo xml
    5. arquivo json