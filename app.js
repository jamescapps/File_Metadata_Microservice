//Setup
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
 })

app.post('/api/fileanalyse', (req, res) => {
    console.log("Uploading...")
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Node.js listening ...');
})