//var mysql = require('./MySql')
var express = require('express')
const multer = require('multer')
var fs = require('fs')
var router = express.Router()

router.get('/', function (req, res) {
    res.render('index.html')
})
router.post('/upload', multer({ dest: 'upload' }).single('file'), (req, res) => {
    console.log(req.file)
    fs.renameSync(req.file.path, 'upload/' + req.file.originalname)
    req.file.path = '/upload' + req.file.originalname
    res.send(req.file.originalname)
})
router.get('/download', (req, res) => {
    console.log(req.query)
    req.query.url ? res.download('upload/' + req.query.url) : res.send('server error')
})
module.exports = router;
