# App

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Generate api
```
запустить
node ./node_modules/swagger-vue-api/script.js -s ./src/services/swagger/users.swagger.json -o ./src/services/ -c users
node ./node_modules/swagger-vue-api/script.js -s ./src/services/swagger/postings.swagger.json -o ./src/services/ -c postings
поправить пути подключения сгенерированных файлов
```
