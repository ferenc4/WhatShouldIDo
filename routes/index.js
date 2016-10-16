var express = require('express');
var router = express.Router();
var homepageData = {
    options: [
        "Learn Something New",
        "Watch Something Interesting",
        "Plan An Event",
        "Go Places",
        "Do Sports",
        "Check Out Social media",
        "Take Care Of Yourself"
    ],
    type: 'choice',
    name: 'YourName'
};


/* GET home page. */
router.get('/', function (req, res, next) {
    var options = ["Learn Things", "Watch Stuff", "Plan An Event", "Going Places", "Do Sports", "Check Out Social media"];
    res.render('index', homepageData);
});

module.exports = router;
