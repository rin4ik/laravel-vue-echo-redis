# Laravel Vue Echo Redis
Realtime  application based on Laravel, Vuejs, Redis and Laravel-Echo-Server. Simple boilerplace which shows vue and laravel echo events using redis and laravel-echo-server
 ## Installation
 
 ### Steps.
 
 > To run this project, you must have PHP 7 installed as a prerequisite.
 
 ```bash
 # install project
 git clone https://github.com/rin4ik/laravel-vue-echo-redis.git
 
 
 # navigate to project folder and install all composer dependencies
 cd laravel-vue-echo-redis && composer install

 # copy .env file 
 cp .env.example .env
  
 # generate application and jwt keys 
 php artisan key:generate  
 
 # run the project locally
 php artisan serve 

 # install npm dependencies for further deployment
 npm install && npm run serve



 # install laravel-echo-server globally
 npm install -g laravel-echo-server
 laravel-echo-server start

```   
 Navigate to *http://localhost:8000*



