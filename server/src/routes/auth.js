const express = require("express");
const router = express.Router();
const { register, signin, requireSignin } = require("../controllers/auth");

router.post("/register", register);
router.post("/signin", signin);

module.exports = router;
