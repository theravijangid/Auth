const express = require("express");
const router = express.Router();

const {login , signup} = require("../controller/auth");
const {auth, isStudent, isAdmin} = require("../middleware/auth");


router.post("/login", login);
router.post("/signup", signup);

router.get("/test", auth , (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected Route for test'
    });
});

//Protected routes
router.get("/Student", auth, isStudent, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected Route for student'
    });
});

router.get("/Admin", auth, isAdmin , (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected Route for student'
    });
});

module.exports = router;
