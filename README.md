# PostIt
Simple one-page application that used to create sticky notes. </br>
A PostIt project developed using Spring Boot on a back-end and Angular on a front-end. </br>


## Technologies
Java version 17 </br>
Spring Boot 3.0.6</br>
Angular version 14.1.1.</br>


## Development server

The back-end server could be started from main class `PostItApplication` (default server from Spring Boot is used - Tomcat). </br>

For a front-end open console and change directory to `postis-html` (`cd .\postit-html\`) and use `ng serve` command for a dev server. 
Application is available under localhost port 4200 `http://localhost:4200/`. 

## Database

The PostIt application is running with H2 Database. All data is stored in DB file, not in memory. 
File is located in project directory and file name is `post-it-db/` 
Database could be accessed with browser and url - http://localhost:8080/h2-console/login.jsp.
JDBC URL is - `jdbc:h2:./post-it-db`, and login/password credentials: `sa/sa`.
