const express = require("express");
const router = express.Router();
const { registerCtrl , loginCtrol, getAll} = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");

router.get("/", getAll);

router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrol);

module.exports = router;