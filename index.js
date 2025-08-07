export default {
    async fetch() {
        return new Response(null, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': '*'
            }
        });
    }
}