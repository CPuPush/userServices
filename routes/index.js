const router = require('express').Router();
const PasienController = require('../controller/pasienController');

router.post("/userservices/pasien/register", PasienController.pasienRegister);
router.post("/userservices/pasien/login", PasienController.pasienLogin);


module.exports = router;