const express = require('express');
const app = express();
app.use(express.json());

let students = [
    { id: 1, name: 'Alice Smith', course: 'DevOps' },
    { id: 2, name: 'Bob Jones', course: 'Cloud Computing' }
];

app.get('/api/students', (req, res) => res.status(200).json(students));
app.post('/api/students', (req, res) => {
    if (!req.body.name || !req.body.course) return res.status(400).send('Missing fields');
    const newStudent = { id: students.length + 1, name: req.body.name, course: req.body.course };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

module.exports = app;