This website made with  <br />
<br />
frontend : gatsby tailwind  <br />
axios : integration <br />
backend : nodejs express <br />
<br />
for Codelabs Academy FullStack Dev Challenge <br />
<br />
----------------------------------------------------------------------
<br />
to start the website locally we need two part(backend and front) <br />
backend : https://github.com/wadjih-bencheikh18/free-survey-backend <br />
frontend: https://github.com/wadjih-bencheikh18/free-survey-frontend <br />
<br />
<br />
I-Backend: <br />
&nbsp;1- clone backend project: <br />
&nbsp;&nbsp;&nbsp;a- open your cmd <br />
&nbsp;&nbsp;&nbsp;b- tape :  <br />
&nbsp;&nbsp;&nbsp;&nbsp; git clone https://github.com/wadjih-bencheikh18/free-survey-backend.git  <br />
&nbsp;&nbsp;&nbsp;&nbsp;(to install git : https://git-scm.com/book/en/v2/ <br />Getting-Started-Installing-Git) <br />
&nbsp;&nbsp;&nbsp;c- go to cloned repo :  <br />
&nbsp;&nbsp;&nbsp;&nbsp; cd free-survey-backend <br />
&nbsp;2- install packages : <br />
&nbsp;&nbsp;&nbsp; yarn install or > npm install <br />
&nbsp;&nbsp;&nbsp;(to install yarn : https://classic.yarnpkg.com/en/docs/install) <br />
&nbsp;3- start our local server in port 8080 : <br />
&nbsp;&nbsp;> npm start <br />
 <br />
II-Fontend: <br />
&nbsp;1- clone backend project: <br />
&nbsp;&nbsp;&nbsp;a- open your cmd <br />
&nbsp;&nbsp;&nbsp;b- clone :  <br />
&nbsp;&nbsp;&nbsp;&nbsp;git clone https://github.com/wadjih-bencheikh18/free-survey-fontend.git  <br />
&nbsp;&nbsp;&nbsp;&nbsp;(to install git : https://git-scm.com/book/en/v2Getting-Started-Installing-Git) <br />
&nbsp;&nbsp;&nbsp;c- go to cloned repo :  <br />
&nbsp;&nbsp;&nbsp;&nbsp; cd free-survey-fontend <br />
&nbsp;2- install packages : <br />
&nbsp;&nbsp;&nbsp; yarn install or  npm install <br />
&nbsp;&nbsp;&nbsp;&nbsp;(to install yarn : https://classic.yarnpkg.com/en/docs/install) <br />
&nbsp;3- start your local website http://localhost:8000 : <br />
&nbsp;&nbsp;&nbsp; npm start <br />
&nbsp;4- enter the website using navigator on: http://localhost:8000 <br />
 <br />
 <br />
 <br />
How to add external data persistence? <br />
 <br />
if we want to use external data persistence we reather use "MongoDb" by following the next steps: <br />
1- add MongoDb and mongoose to our project: <br />
&nbsp;&nbsp; yarn add mongodb mongoose -D <br />
2- connect to our database (we can use atlas) <br />
&nbsp;&nbsp;exmple : mongoose.connect("mongodb+srv://"username":"password"@freesurvey.4qkzo.mongodb.net/Database?retryWrites=true&  w=majority"); <br />
3- create surveys mongoose Schema <br />
4- create our api using express router <br />