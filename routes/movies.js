var express = require("express");
var router = express.Router();
const moviesCtrl = require("../controllers/movies");

//All paths start with /movies

//get all movies
router.get("/", moviesCtrl.index);

//Get /movies/new --- shows form to make new movie
router.get("/new", moviesCtrl.new);

///movies/:id ----> Details of one movie
router.get("/:id", moviesCtrl.show);
//Post /movies --- will handle above form submission
router.post("/", moviesCtrl.create);

module.exports = router;
