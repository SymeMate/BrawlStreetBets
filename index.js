const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrawlStreetBets</title>
    <style>
        /* Normal Mode Styles */
        :root {
            --bg-color: #1b1b1b;
            --text-color: #ffffff;
            --accent-color: #ffa31a;
            --container-bg: #2a2a2f;
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
            text-align: center;
        }

        body:not(.party-mode) h1 {
            color: var(--accent-color);
            font-size: 2.8rem;
        }

        body:not(.party-mode) h2 {
            color: var(--accent-color);
        }

        body:not(.party-mode) p {
            color: #b0b8c1;
            font-size: 1.2rem;
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
            text-align: center;
            animation: shake 0.5s infinite;
        }

        body.party-mode h1 {
            color: #fff;
            font-size: 3.5rem;
            text-shadow: 2px 2px #ff0000, -2px -2px #00ff00, 4px 4px #0000ff;
            animation: rainbow 3s infinite, shake 0.3s infinite;
        }

        body.party-mode h2 {
            color: #fff;
            animation: rainbow 2s infinite;
            text-shadow: 2px 2px #000;
        }

        body.party-mode p {
            color: #fff;
            font-size: 1.4rem;
            animation: blink 0.5s infinite;
            text-shadow: 1px 1px #ff00ff;
        }

        /* Common Gallery Styles */
        .smash-gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-top: 2em;
        }

        .smash-gallery img {
            border-radius: 10px;
            width: 180px;
            height: 120px;
            object-fit: cover;
            transition: all 0.3s;
        }

        /* Gallery Party Mode */
        body.party-mode .character-card {
            border: 3px solid #ff00ff;
            animation: shake 0.3s infinite;
        }

        body.party-mode .character-card:hover {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 0 30px #ff00ff;
        }

        body.party-mode .character-card:hover .character-info {
            transform: translateY(0);
            animation: rainbow 2s infinite;
        }

        body.party-mode .character-info h3 {
            text-shadow: 2px 2px #ff0000;
        }

        /* Character Cards */
        .character-card {
            position: relative;
            text-decoration: none;
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .character-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 15px;
            background: rgba(0,0,0,0.8);
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }

        .character-info h3 {
            margin: 0;
            font-size: 1.2em;
            color: var(--accent-color);
        }

        .character-info p {
            margin: 5px 0 0;
            font-size: 0.9em;
            color: var(--text-color);
        }

        /* Gallery Normal Mode */
        body:not(.party-mode) .character-card {
            border: 2px solid #444;
            background: #111;
            box-shadow: 0 2px 12px #0006;
        }

        body:not(.party-mode) .character-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px #000a;
        }

        body:not(.party-mode) .character-card:hover .character-info {
            transform: translateY(0);
        }

        /* Hadouken Battle Animation */
        .hadouken-battle {
            position: fixed;
            top: 50%;
            left: 0;
            width: 100vw;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            opacity: 0;
            z-index: 10;
            transition: opacity 0.3s;
        }
        .hadouken-gif {
            width: 80vw;
            max-width: 1200px;
            min-width: 400px;
            height: 220px;
            object-fit: cover;
            filter: drop-shadow(0 0 40px #fff) drop-shadow(0 0 80px #ffa31a);
        }
        body.party-mode .hadouken-battle {
            opacity: 1;
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

        /* Navigation Button Styles */
        .nav-button {
            padding: 12px 24px;
            margin: 20px 0;
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

        @media (max-width: 800px) {
            .container { padding: 1rem; }
            .smash-gallery img { width: 120px; height: 80px; }
        }
    </style>
</head>
<body>
    <button id="mode-toggle">Toggle Party Mode</button>
    <div class="hadouken-battle">
        <img class="hadouken-gif" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanhmbThyazVlZG11OHhnc2U5dXNrcmN5MnFtcTZmZGlrN3VrbW84YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/px6X1e8dWxdsc/giphy.gif" alt="Hadouken Battle">
    </div>
    <div class="container">
        <h1>Welcome to BrawlStreetBets</h1>
        <p><strong>BrawlStreetBets</strong> is your hub for all things Super Smash Bros.!<br>
        Join the community, discuss strategies, compete in tournaments, and celebrate your favorite fighters.<br>
        Whether you're a seasoned pro or a newcomer, there's a place for you here!</p>
        <button onclick="window.location.href='/credits'" class="nav-button">View Credits</button>
        <h2>Super Smash Bros. Gallery</h2>
        <div class="smash-gallery">
            <a href="/character/mario" class="character-card">
                <img src="https://www.smashbros.com/assets_v2/img/fighter/mario/main.png" alt="Mario" />
                <div class="character-info">
                    <h3>Mario</h3>
                    <p>All-around fighter</p>
                </div>
            </a>
            <a href="/character/link" class="character-card">
                <img src="https://www.smashbros.com/assets_v2/img/fighter/link/main.png" alt="Link" />
                <div class="character-info">
                    <h3>Link</h3>
                    <p>Tactical warrior</p>
                </div>
            </a>
            <a href="/character/pikachu" class="character-card">
                <img src="https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png" alt="Pikachu" />
                <div class="character-info">
                    <h3>Pikachu</h3>
                    <p>Speed demon</p>
                </div>
            </a>
            <a href="/character/samus" class="character-card">
                <img src="https://www.smashbros.com/assets_v2/img/fighter/samus/main.png" alt="Samus" />
                <div class="character-info">
                    <h3>Samus</h3>
                    <p>Ranged specialist</p>
                </div>
            </a>
            <a href="/character/fox" class="character-card">
                <img src="https://www.smashbros.com/assets_v2/img/fighter/fox/main.png" alt="Fox" />
                <div class="character-info">
                    <h3>Fox</h3>
                    <p>Technical master</p>
                </div>
            </a>
            <a href="/character/captain-falcon" class="character-card">
                <img src="https://www.smashbros.com/assets_v2/img/fighter/captain_falcon/main.png" alt="Captain Falcon" />
                <div class="character-info">
                    <h3>Captain Falcon</h3>
                    <p>Combo king</p>
                </div>
            </a>
        </div>
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

// Import pages and data
import creditsPage from './credits.js';
import { characterTemplate } from './characterTemplate.js';
import characters from './characters.js';

export default {
    async fetch(request) {
        const url = new URL(request.url);
        const path = url.pathname;

        let responseHtml = html; // Default to main page

        // Basic routing
        if (path === '/credits') {
            responseHtml = creditsPage.html;
        } else if (path.startsWith('/character/')) {
            const characterId = path.split('/')[2];
            const character = characters[characterId];
            
            if (character) {
                responseHtml = characterTemplate(character);
            } else {
                responseHtml = `<!DOCTYPE html>
                    <html>
                        <body>
                            <h1>Character not found</h1>
                            <a href="/">Back to home</a>
                        </body>
                    </html>`;
            }
        }

        return new Response(responseHtml, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': '*'
            }
        });
    }
}