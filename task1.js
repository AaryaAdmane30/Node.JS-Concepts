const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<h1>Hello thereee</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<h1>List of Users</h1>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log("Form submitted with message:", message);
            // optionally save to file or database here
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    // Default response for unhandled routes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>404</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
});
