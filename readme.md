# Node.js module

It's a REST API built to work with a collection of contacts. I prepared user authentication/authorization logic using JWT (https://jwt.io/). To work with the REST API, I used Postman. For simple data validation, I used the validator package (https://www.npmjs.com/package/validator). To manage data I'm using MongoDB and Mongoose. Moreover, I used Gravatar for user avatar generation (https://github.com/emerleite/node-gravatar). To allow users to update avatars I used Multer for file uploads. Each uploaded file is then cropped using Jimp (https://www.npmjs.com/package/jimp). As a last step, I implemented account email verification using SendGrid.

### The REST API supports the following routes

#### Contacts

- `GET /api/contacts` &mdash; Gets all contacts
- `GET /api/contacts/:id` &mdash; Gets a contact by it's ID
- `POST /api/contacts` &mdash; Creates a new contact
- `DELETE /api/contacts/:id` &mdash; Deletes a contact with provided ID
- `PUT /api/contacts/:id` &mdash; Updates a contact with provided ID
- `PATCH /api/contacts/:contactId/favorite` &mdash; Changes the favorite status for a contact
- `GET /api/contacts?favorite=true` &mdash; Gets contacts with favorite status
- `GET /api/contacts?page=1&limit=20` &mdash; (Pagination) Gets contacts from a specific page in a specified limit

#### Users

- `GET /api/users/current` &mdash; Gets the details of the current logged in user
- `PATCH /api/users/avatars` &mdash; Updates the current user's avatar with the uploaded photo
- `PATCH /api/users` &mdash; Updates the user's subscription type ('starter', 'pro', 'business')

#### Auth

- `GET /api/users/logout` &mdash; Logs out the current user
- `POST /api/users/login` &mdash; Logs in
- `POST /api/users/signup` &mdash; Creates new user
- `GET /api/users/verify/:verificationToken` &mdash; Verifies the user email address provided during signup
- `POST /api/users/verify` &mdash; Resends the verification email with a verification link

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
