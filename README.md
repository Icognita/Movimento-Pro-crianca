# Pro-crianca

## dependencias já instaladas
   "bcrypt": "^5.1.1",
    "body-parser": "^1.20.2",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mysql2": "^3.6.5",
    "nodemon": "^3.0.1",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "sequelize": "^6.35.1"

    sequelize cli
    npm install --save-dev sequelize-cli
    npx sequelize-cli init
##
data base criada

create database movimento_pro_crianca;

npx sequelize-cli model:generate --name User --attributes name:string,login:string,password:string