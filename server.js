const express = require('express');
const logger = require('./config/logger')
const paramsConverter = require('./middlewares/paramsConverter')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes')
const companyRoutes = require('./routes/companyRoutes')
const brandRoutes = require('./routes/brandRoutes')
const steelCategoryRoutes = require('./routes/steelCategoryRoutes');
const cementCategoryRoutes = require('./routes/cementCategoryRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const steelPurchaseRoutes = require('./routes/steelPurchaseRoutes');
const cementPurchaseRoutes = require('./routes/cementPurchaseRoutes');
const steelStockRoutes = require('./routes/steelStockRoutes');
const cementStockRoutes = require('./routes/cementStockRoutes');
const orderRoutes = require('./routes/orderRoutes');
const steelOrderRoutes = require('./routes/steelOrderRoutes');
const cementOrderRoutes = require('./routes/cementOrderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { syncModels } = require('./config/loadModels');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(paramsConverter);
syncModels();
// Routes for user operations
app.use('/api/users', userRoutes);
app.use('/api/bankAccounts', bankAccountRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/steel-categories', steelCategoryRoutes);
app.use('/api/cement-categories', cementCategoryRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/steel-purchases', steelPurchaseRoutes);
app.use('/api/cement-purchases', cementPurchaseRoutes);
app.use('/api/steel-stocks', steelStockRoutes);
app.use('/api/cement-stocks', cementStockRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/steel-orders', steelOrderRoutes);
app.use('/api/cement-orders', cementOrderRoutes);
app.use('/api/payments', paymentRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
