const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/Bots_Pedroes');


router.get('/', (req, res) => {
    indexController.index(req, res);
});
router.post('/robo', (req, res) => {
    indexController.robo(req, res);
});

module.exports = router;