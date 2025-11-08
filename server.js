const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/coc-viec-tu-xa';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Coc Viec Tu Xa API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});