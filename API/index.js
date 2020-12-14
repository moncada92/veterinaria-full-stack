const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const app = express();

// option cors, enabled some dominios
const whiteList = ['http://localhost:9000'];
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whiteList.some(dominio => dominio === origin);
    if (exist) {
      callback(null, true);
    } else {
      callback(new Error('no permitted by Cors'))
    }
  }
}
// enabled option cors
//app.use( cors(corsOptions));

// enabled Cors
app.use(cors());

//enabled the body -parse for API
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// habilty routing
app.use('/', routes());


app.listen(4000, () => {
  console.log('server working');
})