const express = require('express');
const app = express();
const port = 3000;

// Sample data
const scores = [
    { match: 'Team A vs Team B', score: '2 - 1' },
    { match: 'Team C vs Team D', score: '0 - 0' },
    { match: 'Team E vs Team F', score: '1 - 3' }
];

// Serve static files
app.use(express.static('public'));

// API endpoint to get scores
app.get('/api/scores', (req, res) => {
    res.json(scores);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
