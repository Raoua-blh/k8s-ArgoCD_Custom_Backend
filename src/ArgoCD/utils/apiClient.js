const axios = require('axios');
const { argoCD } = require('../config/config');
const https = require('https');

//fake agent to bypass the certif error
const agent = new https.Agent({ rejectUnauthorized: false });

const apiClient = axios.create({
  baseURL: argoCD.server,
  headers: {
    Authorization: `Bearer ${argoCD.token}`,
    'Content-Type': 'application/json'
  },
  httpsAgent: agent

});


module.exports = apiClient;
