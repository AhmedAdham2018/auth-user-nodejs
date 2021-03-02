const mongoose = require('mongoose');

module.exports = function() {
 
  mongoose.connect('mongodb://localhost/auth-user-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => console.log("DB is connected now."));
}