const express = require('express');
const router = express.Router();
const clusterController = require('../controllers/clusterController');

router.post('/connect', clusterController.connectCluster);

router.get('/', clusterController.listClusters);


module.exports = router;
