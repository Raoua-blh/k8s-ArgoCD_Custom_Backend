require('dotenv').config();

module.exports = {
  argoCD: {
    server: process.env.ARGOCD_SERVER,
    token: process.env.ARGOCD_TOKEN
  },

  
};
