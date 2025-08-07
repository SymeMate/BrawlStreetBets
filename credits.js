export const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrawlStreetBets - Credits</title>
    <style>
        /* Normal Mode Styles */
        :root {
            --bg-color: #1b1b1b;
            --text-color: #383535ff;
            --accent-color: #ffa31a;
            --container-bg: #f8fbff;
            --font-family: 'Segoe UI', Arial, sans-serif;
        }

        /* Animations for Party Mode */
        @keyframes rainbow {
            0% { color: #ff0000; } 20% { color: #ff00ff; } 40% { color: #00ff00; }
            60% { color: #ffff00; } 80% { color: #00ffff; } 100% { color: #ff0000; }
        }
        @keyframes blink {
            0%, 49% { opacity: 1; } 50%, 100% { opacity: 0.7; }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px) rotate(-5deg); }
            75% { transform: translateX(5px) rotate(5deg); }
        }
        @keyframes backgroundFlash {
            0% { background: #ff00ff; }
            25% { background: #00ff00; }
            50% { background: #ffff00; }
            75% { background: #00ffff; }
            100% { background: #ff00ff; }
        }

        /* Base Styles */
        body { 
            margin: 0;
            transition: all 0.3s ease;
        }

        /* Normal Mode */
        body:not(.party-mode) {
            font-family: var(--font-family);
            background: var(--bg-color);
            color: var(--text-color);
        }

        body:not(.party-mode) .container {
            max-width: 700px;
            margin: 40px auto;
            background: var(--container-bg);
            padding: 2.5rem 3.5rem;
            border-radius: 18px;
            box-shadow: 0 4px 32px #000a;
        }

        body:not(.party-mode) h1 {
            color: var(--accent-color);
            font-size: 2.8rem;
            text-align: center;
        }

        body:not(.party-mode) h2 {
            color: var(--accent-color);
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 10px;
            margin-top: 30px;
        }

        /* Party Mode */
        body.party-mode {
            font-family: 'Comic Sans MS', cursive;
            background: #000;
            color: #fff;
            animation: backgroundFlash 10s infinite;
            cursor: crosshair;
        }

        body.party-mode .container {
            max-width: 800px;
            margin: 40px auto;
            background: rgba(0,0,0,0.8);
            padding: 2.5rem;
            border: 5px solid #ff00ff;
            border-style: double;
            box-shadow: 0 0 20px #ff00ff, 0 0 40px #00ff00, 0 0 60px #0000ff;
        }

        body.party-mode h1 {
            text-align: center;
            color: #fff;
            font-size: 3.5rem;
            text-shadow: 2px 2px #ff0000, -2px -2px #00ff00, 4px 4px #0000ff;
            animation: rainbow 3s infinite, shake 0.3s infinite;
        }

        body.party-mode h2 {
            color: #fff;
            animation: rainbow 2s infinite;
            text-shadow: 2px 2px #000;
            border-bottom: 3px solid #ff00ff;
            padding-bottom: 10px;
        }

        /* Credit Items */
        .credit-item {
            margin: 20px 0;
            padding: 15px;
            border-radius: 8px;
            transition: all 0.3s;
        }

        body:not(.party-mode) .credit-item {
            background: rgba(255,255,255,0.05);
        }

        body.party-mode .credit-item {
            background: rgba(255,0,255,0.1);
            animation: blink 2s infinite;
            border: 2px solid #ff00ff;
        }

        .credit-item h3 {
            margin: 0 0 10px 0;
        }

        body.party-mode .credit-item h3 {
            animation: rainbow 3s infinite;
        }

        .credit-value {
            font-size: 1.2em;
            font-weight: bold;
        }

        body:not(.party-mode) .credit-value {
            color: var(--accent-color);
        }

        body.party-mode .credit-value {
            animation: rainbow 1s infinite;
        }

        /* Navigation Button Styles */
        .nav-button {
            display: block;
            padding: 12px 24px;
            margin: 20px auto;
            font-size: 1.1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
        }

        body:not(.party-mode) .nav-button {
            background: var(--accent-color);
            color: #000;
            border: none;
            box-shadow: 0 2px 10px #0004;
        }

        body:not(.party-mode) .nav-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px #0006;
        }

        body.party-mode .nav-button {
            background: #ff00ff;
            color: #fff;
            border: 3px solid #00ff00;
            animation: rainbow 3s infinite;
            box-shadow: 0 0 10px #ff00ff;
        }

        body.party-mode .nav-button:hover {
            animation: rainbow 0.5s infinite, shake 0.3s infinite;
            transform: scale(1.1);
        }

        /* Mode Toggle Button */
        #mode-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-family: var(--font-family);
            font-weight: bold;
            transition: all 0.3s;
            z-index: 1000;
        }

        body:not(.party-mode) #mode-toggle {
            background: var(--accent-color);
            color: #000;
            border: none;
            box-shadow: 0 2px 10px #0004;
        }

        body.party-mode #mode-toggle {
            background: #ff00ff;
            color: #fff;
            border: 3px solid #00ff00;
            animation: rainbow 3s infinite;
            box-shadow: 0 0 10px #ff00ff;
        }

        @media (max-width: 800px) {
            .container { padding: 1rem; }
        }
    </style>
</head>
<body>
    <button id="mode-toggle">Toggle Party Mode</button>
    <div class="container">
        <h1>Your Credits</h1>
        
        <h2>Battle Points</h2>
        <div class="credit-item">
            <h3>Current Battle Points</h3>
            <div class="credit-value">🏆 15,750 BP</div>
            <p>Earned from tournament victories and daily challenges</p>
        </div>

        <h2>Tournament Achievements</h2>
        <div class="credit-item">
            <h3>Tournaments Won</h3>
            <div class="credit-value">🏅 23</div>
            <p>First place finishes in community tournaments</p>
        </div>
        
        <div class="credit-item">
            <h3>Total Prize Money</h3>
            <div class="credit-value">💰 $2,450</div>
            <p>Accumulated winnings from competitive play</p>
        </div>

        <h2>Character Stats</h2>
        <div class="credit-item">
            <h3>Main Fighter</h3>
            <div class="credit-value">⚔️ Mario</div>
            <p>Win Rate: 68%</p>
        </div>
        
        <div class="credit-item">
            <h3>Total Matches</h3>
            <div class="credit-value">🎮 1,337</div>
            <p>Played across all game modes</p>
        </div>

        <button onclick="window.location.href='/'" class="nav-button">Back to Home</button>
    </div>
    <script>
        const toggleButton = document.getElementById('mode-toggle');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('party-mode');
            toggleButton.textContent = document.body.classList.contains('party-mode') 
                ? 'Switch to Normal Mode' 
                : 'Toggle Party Mode';
        });
    </script>
</body>
</html>`;

export default { html };
