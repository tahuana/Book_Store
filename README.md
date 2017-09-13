# Book_Store


## Getting Started

1. Fork & Clone this respository
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information
    4. Fix to binaries for sass: `npm rebuild node-sass`
    5. Run migrations: `npm run knex migrate:latest`
      - Check the migrations folder to see what gets created in the DB
3. Install dependencies: `npm install`
    6. Run the server: `npm run local`
    7. Visit `http://localhost:3000/` or `http://localhost:PORT` where PORT is the port specified on .env file


## Dependencies

- PostgreSQL
- Node 6.9.x or above
- npm 3.10.x or above
- express 4.15.4
- dotenv 4.0.0
- pg 7.3.0
- knex 0.13.0
- knex-logger 0.1.0
- body-parser 1.18.1

## Screenshots
!["xx"](http://)
