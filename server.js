const express = require('express'); // setting up express server
const dotenv = require('dotenv'); // loading environment variables
const db = require('./models'); // importing database models
dotenv.config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
app.use(express.json()); // Parse JSON bodies

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/products', productRoutes); // Product management routes

// Sync DB and start server
db.sequelize.sync().then(() => { 
  app.listen(process.env.PORT, () => { 
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
});
