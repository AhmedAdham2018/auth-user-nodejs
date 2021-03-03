const express = require('express');
const app = express();
app.use(express.json());
const routes = require('./routes/routes');
require('./startup/db')();
require('./startup/cors')(app);

app.use('/api' , routes)

app.listen(8080 , () => console.log("Server is running on port 8080"));