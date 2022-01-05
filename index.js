require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

connection();

app.use(express.json())
app.use(cors())

app.use(express.static((path.join(__dirname, 'client', 'build'))))

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

const port = process.env.PORT || 4545

console.log(process.env.NODE_ENV)

app.listen(port, () => console.log(`Listening on port ${port}...`))