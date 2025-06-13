const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Sync DB and start server
db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀Server running on port ${process.env.PORT}`);
  });
});
