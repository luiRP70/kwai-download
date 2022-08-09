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

router.get('/robo/download', (req, res) => {
    indexController.download(req, res);
});

router.get('/robo/inserireditar', (req, res) => {
    indexController.loadmodal(req, res);
});
router.post('/robo/inserireditar', (req, res) => {
    indexController.create(req, res);
});
router.put('/robo/inserireditar', (req, res) => {
    indexController.update(req, res);
});

module.exports = router;