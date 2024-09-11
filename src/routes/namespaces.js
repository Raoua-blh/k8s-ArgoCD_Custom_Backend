const express = require('express');
const router = express.Router();
const namespaceController = require('../controllers/namespaceCtrl');

router.post('/new', namespaceController.createNamespace);

router.get('/all', namespaceController.listNamespaces);
router.get('/', namespaceController.listNamespaces);

router.delete('/:name', namespaceController.deleteNamespace);

module.exports = router;
