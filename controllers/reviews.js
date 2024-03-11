const Movie = require("../models/movie");

const create = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    movie.reviews.push(req.body);
    try {
        await movie.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/movies/${movie._id}`);
};

module.exports = {
    create,
};
