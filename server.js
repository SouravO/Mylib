const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')




const indexRouter = require('./routes/index')


app.set('view egigine' ,'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


const mongoose = require('mongoose')
const moongoose = require('moongoose')
mongoose.connect('mongodb://localhost:27017/test')
const db = mongoose.connection
// db.on('error ' , error => console.error(error))
// db.once('open ' , () => console.log('Connected to mongoose'))
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to database successfully");
});


app.use('/', indexRouter)

app.listen(process.env.PORT  || 3000)

