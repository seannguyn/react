
const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const mongoose    = require('mongoose')

// instantiate app
const app = express()

// connect database
const db  = require('./Config/key').mongoURI
mongoose.Promise = global.Promise
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() =>{console.log("connected to mongo")})
  .catch((e) => console.log("error"))


// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

// middleware that get excecuted everytime a request is received
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// router
app.use('/users', require('./Router/userRoute'))

// port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listen on port ${port}`))
