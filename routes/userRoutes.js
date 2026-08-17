const express = require('express');
const router = express.Router();


const {registerUser,
    loginUser,
    currentUser
} = require('../controllers/usercontroller');
const registerUserREQSchema = require("../schema/request-schema/create-user-schema")
const validateDto = require("../middleware/validate-dto")

/*router.post('/register',
      validateDto(registerUserREQSchema),
     createUser);
router.get('/users', getUser);*/
router.post("/register",
    validateDto(registerUserREQSchema),
    registerUser);

router.post('/login', loginUser);

router.get('/current', currentUser);

module.exports = router;