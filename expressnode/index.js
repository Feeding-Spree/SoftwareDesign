const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});