# auth-user-nodejs
backend authentication login and register user using node and express

This is the implementation of App in Node.js with express.

Setup Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

Install MongoDB To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

Install the Dependencies Next, from the project folder, install the dependencies:

npm i Populate the Database node seed.js Run the Tests You're almost done! Run the tests to make sure everything is working:

npm test All tests should pass.

Start the Server node app.js This will launch the Node server on port 8080. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:
#for login user : 
http://localhost:8080/api/login

#for register user:
http://localhost:8080/api/register

#for logout:
http://localhost:8080/api/logout

#for get user:
http://localhost:8080/api/user
