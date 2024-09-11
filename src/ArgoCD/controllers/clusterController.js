const clusterService = require('../services/clusterService');

const connectCluster = async (req, res) => {
  try {
    const clusterConfig = req.body;
    const result = await clusterService.addCluster(clusterConfig);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listClusters = async (req, res) => {
  try {
    const clusters = await clusterService.listClusters();
    res.status(200).json(clusters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  connectCluster,
  listClusters,
};
