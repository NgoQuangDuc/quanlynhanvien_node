import express from 'express';
import routes from './src/router/router'
import {authChecker} from './src/config/connect'
// import cors from 'cors'
const app = express()
// var cors = require('cors')


const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
// app.use(cors());
// app.options('*', cors());

const port = process.env.PORT ||8080;
// app.use(cors())


app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin',process.env.LINKS);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(authChecker)
 
// app.use(cors());

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







