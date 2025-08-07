const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrawlStreetBets</title>
    <style>
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
        body { 
            font-family: 'Comic Sans MS', cursive; 
            background: #000; 
            color: #fff; 
            margin: 0;
            animation: backgroundFlash 10s infinite;
            cursor: crosshair;
        }
        .container { 
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
        h1 { 
            color: #fff; 
            font-size: 3.5rem; 
            text-shadow: 2px 2px #ff0000, -2px -2px #00ff00, 4px 4px #0000ff;
            animation: rainbow 3s infinite, shake 0.3s infinite;
        }
        h2 { 
            color: #fff;
            animation: rainbow 2s infinite;
            text-shadow: 2px 2px #000;
        }
        p { 
            color: #fff; 
            font-size: 1.4rem;
            animation: blink 0.5s infinite;
            text-shadow: 1px 1px #ff00ff;
        }
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
            border: 3px solid #ff00ff;
            animation: shake 0.3s infinite;
            transition: all 0.3s;
        }
        .smash-gallery img:hover {
            transform: scale(1.2) rotate(10deg);
            box-shadow: 0 0 30px #ff00ff;
        }
        ::selection {
            background: #ff00ff;
            color: #00ff00;
        }
        @media (max-width: 800px) { 
            .container { padding: 1rem; } 
            .smash-gallery img { width: 120px; height: 80px; } 
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to BrawlStreetBets</h1>
        <p><strong>BrawlStreetBets</strong> is your hub for all things Super Smash Bros.!<br>
        Join the community, discuss strategies, compete in tournaments, and celebrate your favorite fighters.<br>
        Whether you're a seasoned pro or a newcomer, there's a place for you here!</p>
        <h2>Super Smash Bros. Gallery</h2>
        <div class="smash-gallery">
            <img src="https://www.smashbros.com/assets_v2/img/top/hero01.jpg" alt="Super Smash Bros. Ultimate" />
            <img src="https://www.smashbros.com/assets_v2/img/fighter/kirby/main.png" alt="Kirby" />
            <img src="https://www.smashbros.com/assets_v2/img/fighter/mario/main.png" alt="Mario" />
            <img src="https://www.smashbros.com/assets_v2/img/fighter/link/main.png" alt="Link" />
            <img src="https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png" alt="Pikachu" />
        </div>
    </div>
</body>
</html>`;

export default {
    async fetch() {
        console.log('help me');
        return new Response(html, {
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