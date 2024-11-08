document.addEventListener('DOMContentLoaded', () => {
    const scoresDiv = document.getElementById('scores');

    // Function to fetch live scores
    async function fetchScores() {
        try {
            const response = await fetch('/api/scores');
            const scores = await response.json();
            displayScores(scores);
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    }

    // Function to display scores
    function displayScores(scores) {
        scoresDiv.innerHTML = '';
        scores.forEach(score => {
            const scoreCard = document.createElement('div');
            scoreCard.className = 'score-card';
            scoreCard.innerHTML = `
                <h2>${score.match}</h2>
                <p>${score.score}</p>
            `;
            scoresDiv.appendChild(scoreCard);
        });
    }

    // Fetch scores every 30 seconds
    fetchScores();
    setInterval(fetchScores, 30000);
});
