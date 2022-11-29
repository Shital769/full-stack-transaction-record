## Transaction Api

This api is for our react transaction app which is at `... link yo react app repository...`

## How to use

1. clone this project by running `git clone https://github.com/Shital769/full-stack-transaction-record.git `
   2.Run `cd api-transaction`
   3.Run `npm i`
2. Run `npm rin dev`. You must have `nodemon` installed in your system, otherwise run `npm i nodemon -g` to install it globally.

Now the project will be server at `http://localhost:8000`

## API

This api server will have two endpoints.
1.User API 2. Transacting API

All the endpoitnts will follow the following `{router}/api/v1`

## User API

User API will use the following path `{rooturl}/api/v1/user`. This api will allow clients to create user, login and more.

| #   | PATH | METHOD | IS PRIAVTE | DESCRIPTION                      |
| --- | ---- | ------ | ---------- | -------------------------------- |
| 1.  | "/"  | POST   | False      | allow user to create new user    |
| 1.  | "/"  | GET    | False      | allow user to send email and pin |

## Transaction API

Transaction API will use the following path `{rooturl}/api/v1/transaction`. This api will allow clients to CRUD operation on transaction table.

| #   | PATH | METHOD | IS PRIAVTE | DESCRIPTION                                                             |
| --- | ---- | ------ | ---------- | ----------------------------------------------------------------------- |
| 1.  | "/"  | GET    | TRUE       | allow user to fetch their own transaction only.                         |
| 2.  | "/"  | POST   | TRUE       | allow user to post new transactions, data should be send as `{}`        |
| 3.  | "/"  | PATCH  | TRUE       | allow user to                                                           |
| 4.  | "/"  | DELETE | TRUE       | allow user to delete single or multiple item of their transaction only. |
