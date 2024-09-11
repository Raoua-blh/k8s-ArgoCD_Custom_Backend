const apiClient = require('../utils/apiClient');

const addCluster = async (clusterConfig) => {
  try {
    const response = await apiClient.post('/api/v1/clusters', clusterConfig);
    return response.data;
  } catch (error) {
    throw new Error(`Error adding cluster: ${error.message}`);
  }
};

const listClusters = async () => {
    try {
      const response = await apiClient.get('/api/v1/clusters');
      return response.data;
    } catch (error) {
      throw new Error(`Error listing clusters: ${error.message}`);
    }
  };

module.exports = {
  addCluster,
listClusters,
};
