
# My Wallet API

<p align="center">
   <img width=350 src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4b0.svg"/>
</p>


- Equilibrar os gastos com as necessidades (e desejos) é uma prática saudável e que ajuda a manter as contas em dia
- O controle financeiro é um exercício diário
- Para isso surgiu o My Wallet, uma aplicação onde você pode administrar melhor suas finanças

- [Veja meu deploy na Heroku aqui](https://my-wallet-api-mj.herokuapp.com/)
- [Veja meu repositório front end desta aplicação aqui](https://github.com/marcojr73/projeto13-mywallet-front)

***

## Como usar

Instale meu projeto e configure o .env como no exemplo

```bash
  git clone git@github.com:marcojr73/--projeto13-mywallet-back-.git
```

```bash
  npm i
  
  npm run dev
```

***

##	 Tecnologias e Conceitos

- Node.js
- Express
- layered architecture
- Validação com Joi
- Criptografia de senhas
- Geração de token com uuid
- Mongo Db

***
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`name` | `string` |
| `body` |`email` | `string` |
| `body` |`password` | `string` |

#### sign-in

```
  POST /sign-in
```
| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`email` | `string` |
| `body` |`password` | `string` |

#### List last transactions by user

```
  GET /historic
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `header` |`token` | `Authorization` |

#### Delete an transaction

```
  DELETE /delete:${id}
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `header` |`token` | `Authorization` |

#### Insert an new transaction

```
  POST /trading
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `header` |`token` | `Authorization` |
| `body` |`valueTrading` | `number` |
| `body` |`description` | `string` |
| `body` |`type*` | `string` |
* type must be 'input' || 'output'



