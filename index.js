const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrawlStreetBets</title>
    <style>
        body { font-family: Arial, sans-serif; background: #181a20; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        h1 { color: #ffb300; }
        .container { background: #23272f; padding: 2rem 3rem; border-radius: 12px; box-shadow: 0 4px 24px #0008; }
        p { color: #b0b8c1; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to BrawlStreetBets</h1>
        <p>Your Cloudflare Worker backend is running!</p>
        <p>Edit <code>index.js</code> to change your backend logic.</p>
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