const router = require('express').Router();
const protect = require('../middleware/authMiddleware');

const {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    searchMovie,
    getUpcomingMovies
} = require('../controllers/movieController');
const movieREQSchema = require("../schema/request-schema/create-movie-schema")
const updateMovieSchema = require("../schema/request-schema/update-movie-schema")
const validateDto = require("../middleware/validate-dto");



// CREATE
router.post('/movies',validateDto(movieREQSchema),protect, createMovie);

//search movie
router.get('/movies/search',protect, searchMovie);


// GET
router.get('/movies/upcoming', protect, getUpcomingMovies);
router.get('/movies/:userId',protect, getMovies);


// UPDATE
router.put('/movies/:id',validateDto(updateMovieSchema),protect, updateMovie);



// DELETE
router.delete('/movies/:id',protect, deleteMovie);






module.exports = router;