var express = require('express');
var router = express.Router();

/* board Announcement */
// writing
router.post('/am', function(req, res, next) {
    res.send('Announcement');
});

// ask
router.get('/am', function(req, res, next) {
    res.send('Announcement');
});

// delete
router.delete('/am', function(req, res, next) {
    res.send('Announcement');
});


/* board error */
// writing
router.post('/err', function(req, res, next) {
    res.send('Announcement');
});

// ask
router.get('/err', function(req, res, next) {
    res.send('Announcement');
});

// delete
router.delete('/err', function(req, res, next) {
    res.send('Announcement');
});


/* board accounting */
// writing
router.post('/', function(req, res, next) {
    res.send('Announcement');
});

// ask
router.get('/', function(req, res, next) {
    res.send('Announcement');
});

// delete
router.delete('/', function(req, res, next) {
    res.send('Announcement');
});


module.exports = router;