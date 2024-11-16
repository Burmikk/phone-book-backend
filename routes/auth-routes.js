const express = require("express");
const { register } = require("../controllers/auth-controllers");
const { validateRegister } = require("../utils/validateBody");
const { userRegisterSchema } = require("../models/user");
const router = express.Router();

router.post("/register", validateRegister(userRegisterSchema), register);
router.post("login");
router.post("current");
router.post("logout");

module.exports = router;
