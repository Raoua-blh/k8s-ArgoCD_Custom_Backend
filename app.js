const express=require('express');
const kubeRoutes=require('./src/routes/KubeRoutes');
const itemRoutes=require('./src/routes/itemRoutes');
const nsRoutes=require('./src/routes/namespaces');
const clusterRoutes = require('./src/ArgoCD/routes/clusterRoutes');
const cors=require('cors');
const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

app.use('/items', itemRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});
app.use('/api/k8s', kubeRoutes);
app.use('/ns', nsRoutes);

app.use('/argocd', clusterRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
