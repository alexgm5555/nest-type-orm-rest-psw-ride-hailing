<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

This project was generated with the framework nest.js

## Deploy
1. If you want ro clone this project, please execute this code in your terminal:
```bash
git clone https://github.com/alexgm5555/nest-type-orm-rest-psw-ride-hailing
```
2. To install Dependencies
```bash
npm  install
```
3. This project has a env. file, what it will give into the email to respective verification an other instrucctions.
4. To Deploy this proyect in local enviroment it is neccesary download docker Desktop(https://www.docker.com/products/docker-desktop/)
5. To deploy data base server whit follow comands (postgres DB)
```bash
docker-compose up -d
```
6. Deploy proyect developmen enviroment
```bash
npm run start:dev
```


## EndPoint
1. The EndPoint enables:
```
GET  https://prueba-tecnica-alexander-guiza.onrender.com/seed // reate mockdata
```
```
POST https://prueba-tecnica-alexander-guiza.onrender.com/ride/request  //generate a new request

request

  {
    "latIni": 4.693826,
    "longIni":-74.10675,
    "latEnd": 4.646318214596056,
    "longEnd":-74.06731779538278,
    "userEmail":"test2@alex.co"
  }

response

  {
    "ride": {
        "id": "7446d0bd-cd33-4b75-a35b-14ea29bd02ed",
        "distance": 7,
        "price": 10500,
        "driversName": "test1FName",
        "placa": "AAA111",
        "carsColor": "black"
    }
  }
```
```
PATCH https://prueba-tecnica-alexander-guiza.onrender.com/ride/start/{id} //Start ride
PATCH https://prueba-tecnica-alexander-guiza.onrender.com/ride/start/7446d0bd-cd33-4b75-a35b-14ea29bd02ed

response
 
{
    "ride": {
        "id": "7446d0bd-cd33-4b75-a35b-14ea29bd02ed",
        "state": "active",
        "locationIni": [
            "4.693826",
            "-74.10675"
        ],
        "locationEnd": [
            "4.646318214596056",
            "-74.06731779538278"
        ],
        "ridesKm": 7,
        "ridesValue": 10500,
        "timeIni": "2024-01-21 21:50:18",
        "timeEnd": "1000-01-01T00:00:00.000Z",
        "idPaid": "",
        "idFront": ""
    }
}
```
```
PATCH https://prueba-tecnica-alexander-guiza.onrender.com/ride/end/{id} //End ride
PATCH https://prueba-tecnica-alexander-guiza.onrender.com/ride/end/7446d0bd-cd33-4b75-a35b-14ea29bd02ed

response
  {
    "ride": {
      "id": "7446d0bd-cd33-4b75-a35b-14ea29bd02ed",
      "distance": 7,
      "price": 10500,
      "minutes": 1
    }
  }
```
