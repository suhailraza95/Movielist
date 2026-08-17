const asyncHandler = require('express-async-handler');

const validator = require('validator');
const axios = require("axios");

const Movie = require('../models/movieModel');
const ResponseHandler = require("../resources/response-handler")
const {badRequest, notFound} = require('../resources/error-helper')


// CREATE MOVIE
const createMovie = asyncHandler(async (req, res) => {

    const {
        title,
        year,
        posterUrl,
        ratings,
        favourite,
        watched,
        user
    } = req.body;


    // TITLE VALIDATION
    if (!title || title.trim().length < 2) {
     
        badRequest("Please provide valid movie title");
        
    }
   // console.log(title);


    // YEAR VALIDATION
    if (year && !validator.isNumeric(year.toString())) {
        //res.status(400);
        //throw new Error("Year must be a number");
        badRequest("Year must be a number");
    }


    // POSTER URL VALIDATION
    if (posterUrl && !validator.isURL(posterUrl)) {
        //res.status(400);
        //throw new Error("Please provide valid poster URL");
        badRequest("Please provide valid poster URL");
    }


    // RATINGS VALIDATION
    if (ratings && (ratings < 0 || ratings > 10)) {
        //res.status(400);
        //throw new Error("Ratings must be between 0 and 10");
        badRequest("Ratings must be between 0 and 10");
        
    }


    // USER ID VALIDATION
    if (!user || user.length < 24) {
        //res.status(400);
        //throw new Error("Please provide valid user id");
        badRequest("Please provide valid user id");
    }


    // CREATE MOVIE
    const movie = await Movie.create({
        title,
        year,
        posterUrl,
        ratings,
        favourite,
        watched,
        user
    });


    // RESPONSE
    if (movie) {

        //res.status(201).json(movie);
        ResponseHandler.sendSuccess(res, 201, movie);

    } else {

        /*res.status(400);
        throw new Error("Movie creation failed");*/
        badRequest("Movie creation failed");
    }

});


// GET MOVIES
const getMovies = asyncHandler(async (req, res) => {

    const movies = await Movie.find({
        user: req.params.userId
    });

    //res.json(movies);
    ResponseHandler.sendSuccess(res, 200, movies);
});


// UPDATE MOVIE
const updateMovie = asyncHandler(async (req, res) => {

    const movie = await Movie.findById(req.params.id);

    if (!movie) {
       /* res.status(404);
        throw new Error("Movie not found");*/
        notFound("Movie not found");

    }

    const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    //res.json(updatedMovie);
    ResponseHandler.sendSuccess(res, 200, updatedMovie);
});


// DELETE MOVIE
const deleteMovie = asyncHandler(async (req, res) => {

    const movie = await Movie.findById(req.params.id);

    if (!movie) {
        /*res.status(404);
        throw new Error("Movie not found");*/
        notFound("Movie not found");
    }

    await movie.deleteOne();

    res.json({
        message: "Movie deleted"
    });
});

// SEARCH MOVIE BY TITLE
const searchMovie = asyncHandler(async (req, res) => {

    const { title } = req.query;

    if (!title) {
        res.status(400);
        throw new Error("Please provide movie title");
    }

    const movies = await Movie.find({
        title: { $regex: title, $options: 'i' }
    });

    res.status(200).json(movies);
});


// GET UPCOMING MOVIES FROM TMDB
const getUpcomingMovies = asyncHandler(async (req, res) => {

 const response = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        params: {
            language: "en-US",
            page: 1
        }
    }
);

    const movies = response.data.results.map(movie => ({
        tmdbId: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        overview: movie.overview,
        rating: movie.vote_average,
        posterUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null,
        backdropUrl: movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : null
    }));

    ResponseHandler.sendSuccess(res, 200, movies);

});

module.exports = {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    searchMovie,
    getUpcomingMovies
};