# node-rancher-cli

## Introduction
Node Rancher cli is a console utility using node.js to interface with rancher

## Compatibility
 - Tested against Rancher 1.1.4

## Installation
```
npm install -g node-rancher-cli
```

## Usage

### File Based

./config.json
```
{
  "protocol": "https",
  "env": "1a5",
  "host": "test-server:8000",
  "username": "{username}",
  "password": "{password}"
}
```
Command
```
ranch --file ./config.json stack restart Database\Postgres 
```

### Enviroment
```
SET RCLI_PROTOCOL=https
SET RCLI_ENV=1a5
SET RCLI_HOST=test-server:8000
SET RCLI_USERNAME={username}
SET RCLI_PASSWORD={password}
```
Command
```
ranch stack restart Database\Postgres 
```

### Command Line
```
ranch --protocol https --env 1a5 --host test-server:8000 --username {username} --password {password} stack restart Database\Postgres 
```

### Docker
```
docker run --rm --it rungeict/rancher-cli --protocol https --env 1a5 --host test-server:8000 --username {username} --password {password} stack restart Database\Postgres
```

### TODO
 - Flesh out the rest of the api, it can only restart services and containers