import app from './app';
import * as https from 'https';
const PORT = 3000;
import { createConnection } from "typeorm";

createConnection({
    type: "mysql",
    host: "127.0.0.1",
    port: 3103,
    username: "root",
    password: "er0s1ntl1",
    database: "go_high",
    entities: [
      __dirname+'/db/entity/Wallet.js',
      __dirname+'/db/entity/User.js',
      __dirname+'/db/entity/WalletTransaction.js'
      ],
    synchronize: true,
}).then(connection => {
  console.log("Connected to db")
    // here you can start to work with your entities
}).catch(error => console.log(error))


app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT);
});