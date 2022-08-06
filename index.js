require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const porjectRoutes = require('./routes/projectRoutes');
const bodyParser = require('body-parser');
const { json } = require('express');
const app = express();

const dbURL = process.env.DATABASE_URL;

// const dbURL = 'mongodb+srv://faizan:faizan123@cluster0.w7tuthb.mongodb.net/crm?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
  console.log('database is connected');
}).catch((err) => {
  console.log(err);
})

app.use(cors());
app.use(bodyParser.json());
app.use('/projects', porjectRoutes)

app.get('/', (req, res) => {
  res.send('hello from the home page');
})

app.listen(process.env.PORT || 8080, () => console.log('Server is running on port'))

console.log('first')
