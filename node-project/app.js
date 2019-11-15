const express = require('express');
const bodyParser = require('body-parser')
const feedRoutes = require('./routes/feed')
const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded </form>
app.use(bodyParser.json()); // application/json

// Handling CORS Errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Origin', 'Content-Type, Authorization');
  next();
})

app.use('/feed', feedRoutes);

//DB Connection:
// <Issue> - Aditya local mongo db connection; <Fix> - Will later on fix this issue by adding a
// seperate file for db connection variables and adding it to .gitignore

mongoose.connect(
  'mongodb://aditya:aditya123@127.0.0.1:27017/feed?authSource=admin'
).then(result => {
  app.listen(4300);
}).catch(err => console.log(err));
