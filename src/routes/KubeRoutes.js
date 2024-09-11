const express = require('express');
const router = express.Router();
const k8sApi = require('../k8s/kubeClient');

// Endpoint to list all pods
router.get('/pods', async (req, res) => {
  try {
    const result = await k8sApi.listPodForAllNamespaces();
    res.json(result.body.items);
  } catch (error) {
    console.error('Error fetching pods:', error);
    res.status(500).send('Error fetching pods');
  }
});
router.get('/namespaces', async (req, res) => {
    try {
      const response = await k8sApi.listNamespace("default");
      res.json(response.body.items);
    } catch (error) {
      console.error('Error listing ns:', error);
      res.status(500).json({ message: 'Error listing ns' });
    }
  });

  router.get('/namespaces', async (req, res) => {
    try {
      const response = await k8sApi.createNamespacedService("default");
      res.json(response.body.items);
    } catch (error) {
      console.error('Error listing ns:', error);
      res.status(500).json({ message: 'Error listing ns' });
    }
  });

  module.exports = router;
