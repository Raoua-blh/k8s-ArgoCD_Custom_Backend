const namespaceService = require('../services/namespaceService');

const createNamespace = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send('Namespace name is required');
  }

  try {
    const result = await namespaceService.createNamespace(name);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send('Error creating namespace');
  }
};

const listNamespaces = async (req, res) => {
  try {
    const namespaces = await namespaceService.listNamespaces();
    res.json(namespaces);
  } catch (error) {
    res.status(500).send('Error listing namespaces');
  }
};

const deleteNamespace = async (req, res) => {
  const { name } = req.params;

  try {
    const result = await namespaceService.deleteNamespace(name);
    res.json(result);
  } catch (error) {
    res.status(500).send('Error deleting namespace');
  }
};

module.exports = {
  createNamespace,
  listNamespaces,
  deleteNamespace,
};
