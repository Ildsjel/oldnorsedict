var express = require('express');
var router = express.Router();

/*new endpoints are added by mimicking the skeleton

router.get('/', function(req, res, next) {
    res.send('needs to be implemented');
});

the / sppecifies the new endpoint within the users route, when it is exported to the app.js file
 */

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('needs to be implemented');
});


module.exports = router;
