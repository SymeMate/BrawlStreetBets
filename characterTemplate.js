export const characterTemplate = (character) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${character.name} - BrawlStreetBets Character Guide</title>
    <style>
        :root {
            --bg-color: #1b1b1b;
            --text-color: #383535ff;
            --accent-color: #ffa31a;
            --container-bg: #f8fbff;
            --font-family: 'Segoe UI', Arial, sans-serif;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            background: var(--bg-color);
            color: var(--text-color);
        }

        .container {
            max-width: 1000px;
            margin: 40px auto;
            padding: 2rem;
        }

        .character-header {
            display: flex;
            align-items: center;
            gap: 2rem;
            padding: 2rem;
            background: var(--container-bg);
            border-radius: 15px;
            margin-bottom: 2rem;
        }

        .character-image {
            width: 200px;
            height: 200px;
            object-fit: contain;
        }

        .character-title h1 {
            color: var(--accent-color);
            margin: 0;
            font-size: 3rem;
        }

        .character-title p {
            color: #666;
            font-size: 1.2rem;
            margin: 0.5rem 0;
        }

        .section {
            background: var(--container-bg);
            padding: 2rem;
            border-radius: 15px;
            margin-bottom: 2rem;
        }

        .section h2 {
            color: var(--accent-color);
            margin-top: 0;
        }

        .moves-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }

        .move-card {
            background: rgba(0,0,0,0.1);
            padding: 1rem;
            border-radius: 8px;
        }

        .move-card h3 {
            color: var(--accent-color);
            margin: 0 0 0.5rem 0;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
        }

        .stat-card {
            text-align: center;
            padding: 1rem;
            background: rgba(0,0,0,0.1);
            border-radius: 8px;
        }

        .stat-value {
            font-size: 2rem;
            color: var(--accent-color);
            font-weight: bold;
        }

        .nav-button {
            display: inline-block;
            padding: 10px 20px;
            background: var(--accent-color);
            color: #000;
            text-decoration: none;
            border-radius: 5px;
            margin-bottom: 1rem;
        }

        .nav-button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }

        /* Pikachu Battle Animation */
        @keyframes thunderEffect {
            0%, 100% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes pikachuBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .pikachu-battle {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            width: 150px;
            height: 150px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .pikachu-left {
            left: 20px;
        }

        .pikachu-right {
            right: 20px;
            transform: translateY(-50%) scaleX(-1);
        }

        .thunder-bolt {
            position: absolute;
            top: 50%;
            width: 100px;
            height: 40px;
            background: url('https://www.smashbros.com/assets_v2/img/fighter/pikachu/lightning.png') no-repeat center/contain;
            opacity: 0;
        }

        .thunder-left {
            right: -100px;
        }

        .thunder-right {
            left: -100px;
        }

        body.party-mode .pikachu-battle {
            opacity: 1;
        }

        body.party-mode .pikachu-battle img {
            animation: pikachuBounce 1s infinite;
        }

        body.party-mode .thunder-bolt {
            animation: thunderEffect 2s infinite;
        }

        @media (max-width: 768px) {
            .character-header {
                flex-direction: column;
                text-align: center;
            }

            .container {
                padding: 1rem;
            }

            .pikachu-battle {
                width: 100px;
                height: 100px;
            }

            .thunder-bolt {
                width: 60px;
                height: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="pikachu-battle pikachu-left">
        <img src="https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png" alt="Pikachu Left">
        <div class="thunder-bolt thunder-right"></div>
    </div>
    <div class="pikachu-battle pikachu-right">
        <img src="https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png" alt="Pikachu Right">
        <div class="thunder-bolt thunder-left"></div>
    </div>
    <div class="container">
        <a href="/" class="nav-button">← Back to Characters</a>
        
        <div class="character-header">
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <div class="character-title">
                <h1>${character.name}</h1>
                <p>${character.tagline}</p>
            </div>
        </div>

        <div class="section">
            <h2>Overview</h2>
            <p>${character.overview}</p>
        </div>

        <div class="section">
            <h2>Key Stats</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">${character.stats.speed}/10</div>
                    <div>Speed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${character.stats.power}/10</div>
                    <div>Power</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${character.stats.technique}/10</div>
                    <div>Technique</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${character.stats.recovery}/10</div>
                    <div>Recovery</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Special Moves</h2>
            <div class="moves-grid">
                ${character.moves.map(move => `
                    <div class="move-card">
                        <h3>${move.name}</h3>
                        <p>${move.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2>Pro Strategy</h2>
            <p>${character.strategy}</p>
        </div>
    </div>
</body>
</html>`;
