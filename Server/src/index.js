const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')
const cors = require('cors')

const server = express()
const PORT = 3001;

server.use(morgan('dev'))
server.use(cors())

server.use(express.json())  


/*
request --> morgan --> cors --> express.json() -> ruta ('/rickandmorty')
  req        req        req
*/

server.use('/rickandmorty', router)

server.listen(PORT,()=>{
  console.log(`Server is listening on port: ${PORT}`);
})


