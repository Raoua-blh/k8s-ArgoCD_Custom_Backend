const k8sApi = require('../k8s/kubeClient');

const createNamespace = async (namespaceName) => {
  const namespace = {
    apiVersion: 'v1',
    kind: 'Namespace',
    metadata: {
      name: namespaceName,
    },
  };

  try {
    const response = await k8sApi.createNamespace(namespace);
    return response.body;
  } catch (error) {
    console.error('Error creating namespace:', error);
    throw error;
  }
};

const listNamespaces = async () => {
  try {
    const response = await k8sApi.listNamespace();
    return response.body.items;
  } catch (error) {
    console.error('Error listing namespaces:', error);
    throw error;
  }
};

const deleteNamespace = async (namespaceName) => {
  try {
    const response = await k8sApi.deleteNamespace(namespaceName);
    return response.body;
  } catch (error) {
    console.error('Error deleting namespace:', error);
    throw error;
  }
};

module.exports = {
  createNamespace,
  listNamespaces,
  deleteNamespace,
};
