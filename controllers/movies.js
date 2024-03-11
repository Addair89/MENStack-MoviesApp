const Movie = require("../models/movie");

const newMovie = (req, res) => {
    res.render("movies/new", {
        title: "Add Movie",
        errorMsg: "",
    });
};

const create = async (req, res) => {
    req.body.nowShowing = !!req.body.nowShowing;
    console.log(req.body);
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    console.log(req.body);
    try {
        await Movie.create(req.body);
        res.redirect("movies");
    } catch (error) {
        console.log(error);
        res.render("movies/new", {
            errorMsg: error,
        });
    }
};

async function index(req, res) {
    const movies = await Movie.find({});
    console.log(movies);
    res.render("movies/index", {
        movies: movies,
        title: "All Movies",
    });
}

const show = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("movies/show", {
        movie,
        title: "Movie Details",
    });
};

module.exports = {
    new: newMovie,
    create,
    index,
    show,
};
