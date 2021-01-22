 ## Installation
 
 ### Steps.
 
 > To run this project, you must have PHP 7 installed as a prerequisite.
 
 ```bash
 # install project
 git clone https://github.com/rin4ik/rss-feed.git
 
 
 # navigate to project folder and install all composer dependencies
 cd rss-feed && composer install
 
 # copy .env file 
 cp .env.example .env
 
 
 # please create a database and update .env file with correct database name
 DB_DATABASE=mintos
 
 
 # generate application and jwt keys 
 php artisan key:generate
 php artisan jwt:secret
 
 
 
 # seed database with fake user
 php artisan migrate --seed
 
 
 
 # run the project locally
 php artisan serve 
 
```   
 Navigate to *http://localhost:8000*
