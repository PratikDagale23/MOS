const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sem',
  port:3307
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Fetch all student results
app.get('/results', (req, res) => {
  const query = 'SELECT * FROM student_results';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new student result
app.post('/results', (req, res) => {
  const {
    roll_number,
    subject1_mse,
    subject1_ese,
    subject2_mse,
    subject2_ese,
    subject3_mse,
    subject3_ese,
    subject4_mse,
    subject4_ese,
  } = req.body;

  const query =
    'INSERT INTO student_results (roll_number, subject1_mse, subject1_ese, subject2_mse, subject2_ese, subject3_mse, subject3_ese, subject4_mse, subject4_ese) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(
    query,
    [
      roll_number,
      subject1_mse,
      subject1_ese,
      subject2_mse,
      subject2_ese,
      subject3_mse,
      subject3_ese,
      subject4_mse,
      subject4_ese,
    ],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Student result added successfully', id: result.insertId });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
