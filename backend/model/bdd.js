const mongoose = require('mongoose');

var user = "le_bon";
var password = "artisant1";
var bddname = "le_bon";


// useNewUrlParser ;)
var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
   useUnifiedTopology: true 
  };

mongoose.connect(`mongodb://${user}:${password}@ds231956.mlab.com:31956/${bddname}`,
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('connexion ok');
     }
    }
);

module.exports = mongoose;
