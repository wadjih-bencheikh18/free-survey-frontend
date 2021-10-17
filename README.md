This website made with 
frontend : gatsby tailwind 
axios : integration
backend : nodejs express


to start the website locally you need two part(backend and front)
backend : https://github.com/wadjih-bencheikh18/free-survey-backend
frontend: https://github.com/wadjih-bencheikh18/free-survey-frontend

I-Backend:
  1- clone backend project:
    - open your cmd
    - tape : 
      > git clone https://github.com/wadjih-bencheikh18/free-survey-backend.git 
        (to install git : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - go to cloned repo : 
      > cd free-survey-backend
  2- install packages :
      > yarn install or > npm install
        (to install yarn : https://classic.yarnpkg.com/en/docs/install)
  3- start our local server in port 8080 :
      > npm start

II-Fontend:
  1- clone backend project:
    - open your cmd
    - tape : 
      > git clone https://github.com/wadjih-bencheikh18/free-survey-fontend.git 
        (to install git : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - go to cloned repo : 
      > cd free-survey-fontend
  2- install packages :
      > yarn install or > npm install
        (to install yarn : https://classic.yarnpkg.com/en/docs/install)
  3- start your local website in port 8080 :
      > npm start
  4- enter the website using navigator on: http://localhost:8000



How to add external data persistence?

if we want to use external data persistence we reather use "MongoDb" by following the next steps:
1- add MongoDb and mongoose to our project:
  > yarn add Mongodb mongoose -D
2- connect to our database (we can use atlas)
  exmple :mongoose.connect("mongodb+srv://wadjih:<password>@freesurvey.4qkzo.mongodb.net/myFirstDatabase?retryWrites=true&  w=majority");
3- create surveys mongoose Schema
4- create our api using express router