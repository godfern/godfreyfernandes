/**
 * Created by godfrey.f on 07/10/16.
 */

var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));

app.get('*', function (req, res) {
    //res.send('Hello World!');
    res.sendfile('./public/index.html');
});

router.use('/.netlify/functions/app.js', router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
