# GoHighLevel Assignment




This assignment contains crud opertion for wallets.

# Technology 

- TypeScript
- NodeJs
- MySql
- Docker


## Features
- Wallet Setup
- Get All wallets
- Get Wallet By WalletID
- Wallet transaction
- Wallet transaction History


## Installation
Using Docker Compose

```sh
docker-compose up
```

Manual 
- node 16.XX
- mysql 5.65

```sh
npm install 
```
```sh
npm run build
```
```sh
npm run dev-start
```


## Api Endpoints

Get All Users
```sh
curl --location --request GET 'http://65.2.130.112/v1/user'
```

Create Dummy User
```sh
curl --location --request POST 'http://65.2.130.112/v1/user'
```


Get All wallets
```sh
curl --location --request GET 'http://65.2.130.112/v1/wallet'
```

Wallet Setup

```sh
curl --location --request POST 'http://65.2.130.112/v1/wallet-setup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userId": 22
}'
```

Wallet Trasaction

```sh
curl --location --request POST 'http://65.2.130.112/v1/wallet-transaction' \
--header 'Content-Type: application/json' \
--data-raw '{

    "walletId":11,
    "transactionType":"DEBIT",
    "amount": 500
}'
```

Wallet Trasaction History

```sh
curl --location --request GET 'http://65.2.130.112/v1/wallet-transaction?wallet_id=11'
```

## Database 

User Table
```sh
CREATE TABLE `user` (
  `age` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
```
Wallet Table
```sh
CREATE TABLE `wallet` (
  `is_active` tinyint(4) NOT NULL,
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_72548a47ac4a996cd254b08252` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
```
Wallet Transaction
```sh
CREATE TABLE `wallet_transaction` (
  `is_active` tinyint(4) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `wallet_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `transaction_type` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
```