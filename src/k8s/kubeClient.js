const k8s  = require('@kubernetes/client-node');

const kubeConfig = new k8s.KubeConfig();

// Load kubeconfig from default location (typically ~/.kube/config)
kubeConfig.loadFromDefault(); 

const k8sApi = kubeConfig.makeApiClient(k8s.CoreV1Api);

module.exports = k8sApi;
