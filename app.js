const express = require('express')
require('./src/db/connection.js')
const MensRanking = require('./src/models/mens.js')
const router = require('./src/routers/router.js')


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(router);
app.listen(PORT, () => console.log(`connected at ${PORT}`))