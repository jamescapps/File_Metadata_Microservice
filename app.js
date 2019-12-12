//Setup
const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const bodyParser = require('body-parser')
const upload = multer({dest: 'uploads/'})

app.use(cors())
app.use(bodyParser.json())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
 })

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    if (!req.file) {
        res.send("Please select a file.")
    } else {
        console.log("Uploading...")
        res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Node.js listening ...');
})