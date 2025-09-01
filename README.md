<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker compose up -d
```

5. Clonar el archivo `.env.example` y renombrarlo a `.env`
6. Definir las variables de entorno definidas en `.env`

7. Levantar la api

```
yarn start:dev
```

8. Reconstruir la base de datos a partir de la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest
