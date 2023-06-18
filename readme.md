# Node.js module

WORK IN PROGRESS
It's a REST API built to work with a collection of contacts. I prepared user authentication/authorization logic using JWT (https://jwt.io/)
To work with the REST API, I used Postman.
For simple data validation validator package.
To manage data I'm using MongoDB and Mongoose.

### The REST API supports the following routes

#### Contacts

- `GET /api/contacts`
- `GET /api/contacts/:id`
- `POST /api/contacts`
- `DELETE /api/contacts/:id`
- `PUT /api/contacts/:id`
- `PATCH /api/contacts/:id`

#### Users

- `GET /api/users/current`

#### Auth

- `GET /api/users/logout`
- `POST /api/users/login`
- `POST /api/users/signup`

### Commands

- `npm start` &mdash; starts the server in production mode
- `npm run start:dev` &mdash; starts the server in developer mode
- `npm run lint` &mdash; runs a code check with ESLint
- `npm lint:fix` &mdash; runs a code check with ESLint and also automatically corrects simple errors

### Technologies

- JavaScript
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="30" height="30"/>
- Node.js
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" title="Node.js" alt="Node.js" width="60" height="60"/>
- MongoDB
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" title="MongoDB" alt="MongoDB" width="30" height="30"/>
