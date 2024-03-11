var express = require("express");
var router = express.Router();
var reviewsCtrl = require("../controllers/reviews");

//movies/:id/reviews

router.post("/movies/:id/reviews", reviewsCtrl.create);

module.exports = router;
