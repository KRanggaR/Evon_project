// Import dependencies
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of Express
const app = express();

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the public folder to serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, '../'))); // Updated to the correct path for HTML files

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // MySQL username
    password: 'root',     // MySQL password
    database: 'cosmictech'
});

// Connect to MySQL database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// POST route to handle signup form submission
app.post('/signup', (req, res) => {
    const { first_name, middle_name, last_name, email, password, gender, phone, area, postal_code, city, state } = req.body;

    // Validate if all fields are filled
    if (!first_name || !last_name || !email || !password || !gender || !phone || !area || !postal_code || !city || !state) {
        return res.status(400).send('Please fill in all required fields');
    }

    // Insert user data into the database
    const query = `INSERT INTO users (first_name, middle_name, last_name, email, password, gender, phone, address, postal_code, city, state) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(query, [first_name, middle_name, last_name, email, password, gender, phone, area, postal_code, city, state], (err, result) => {
        if (err) {
            console.error('Error inserting user data:', err);
            return res.status(500).send('Database error');
        }
        res.redirect('/signup.html'); // Redirect to signup page after successful signup
    });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
