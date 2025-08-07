const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrawlStreetBets</title>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #181a20; color: #fff; margin: 0; }
        .container { max-width: 700px; margin: 40px auto; background: #23272f; padding: 2.5rem 3.5rem; border-radius: 18px; box-shadow: 0 4px 32px #000a; text-align: center; }
        h1 { color: #ffb300; font-size: 2.8rem; margin-bottom: 0.5em; }
        h2 { color: #ffb300; margin-top: 2em; }
        p { color: #b0b8c1; font-size: 1.2rem; }
        .smash-gallery { display: flex; flex-wrap: wrap; gap: 18px; justify-content: center; margin-top: 2em; }
        .smash-gallery img { border-radius: 10px; box-shadow: 0 2px 12px #0006; width: 180px; height: 120px; object-fit: cover; border: 2px solid #444; background: #111; }
        @media (max-width: 800px) { .container { padding: 1rem; } .smash-gallery img { width: 120px; height: 80px; } }
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