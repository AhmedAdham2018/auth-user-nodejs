const express = require('express');
const app = express();


require('./startup/db')();
require('./startup/cors')(app);
require('./startup/cookieParser')(app);
require('./startup/routes')(app);


app.listen(8080 , () => console.log("Server is running on port 8080"));