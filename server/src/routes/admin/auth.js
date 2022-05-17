const express = require("express");
const router = express.Router();
const {
  register,
  signin,
  requireSignin,
} = require("../../controllers/admin/auth");

router.post("/admin/register", register);
router.post("/admin/signin", signin);

module.exports = router;
