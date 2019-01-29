var express = require('express');
var router = express.Router();

/*new endpoints are added by mimicking the skeleton

router.get('/', function(req, res, next) {
    res.send('needs to be implemented');
});

the / sppecifies the new endpoint within the index route, when it is exported to the app.js file
 */

/* GET users listing. */

/* GET home page. */
router.get('/', function(req, res, next) { //TODO check documentation of express expecially on callbacks
  res.render('index', { title: 'Old Norse Dictionary' }); // syntax meaning res.render(pugfile destination), string to render
});

module.exports = router;
