const express = require('express');
const cors = require('cors')
const connectToDB = require('./db')

const app = express();
connectToDB();

/* middlewares */
app.use(express.json())
app.use(cors())

/* routes */
const registerR = require('./routes/registerR')
const loginR = require('./routes/loginR')
const homepageR = require('./routes/homepageR')
const userR = require('./routes/userR')

app.use('/register', registerR)
app.use('/login', loginR)
app.use('/homepage', homepageR)
app.use('/user', userR)

/* deploy */
app.listen(3001, () => {
    console.log('listening at 3001')
})
