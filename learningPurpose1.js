
//  Only For Learning Purpose Just Look thruough It : 

const http = require('http');

const fs = require('fs');




const server = http.createServer((req, res) => {

      //  Writinng to a sfile and redirecting to a diff file 
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // res.setHeader(name, value); name: the name of the header (like Content-Type, Location, Authorization, etc.) value: what you want that header to be (like text/html, application/json, etc.) My hi like that 
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My hi</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('<h1>Hello thereee</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
        //  REdirecting to a different page after writing to a file

    if (url === '/message' && method === 'POST') {
        const body = [];

        // A Buffer is like a raw container for storing binary data directly in memory — think of it like a bucket 
        // that holds bytes. It’s 
        // especially useful in Node.js because the platform deals with a lot of data streaming — files, HTTP requests, etc.
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        
        req.on('end', () => {

            // What's parsedBody?:
             // When a form is submitted using method="POST" and Content-Type is application/x-www-form-urlencoded

            const parsedBody = Buffer.concat(body).toString();
            // parsedBody becomes the string:    // "message=hellothere"
 
            const message = parsedBody.split('=')[1];
            // parsedBody.split('=')  // => ["message", "hellothere"]

            //  REdirecting to a different page after writing to a file

            fs.writeFile('message.txt', decodeURIComponent(message), err => {
                res.statusCode = 302; // redirect sttatus code
                res.setHeader('Location', '/');
                return res.end();
            });
        });

        return; // Make sure it doesn't fall through
    }

    // Default fallback response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My hi</title></head>');
    res.write('<body><h1>Hello thereee</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});


//   go to : http://localhost:3000

// 

//  1. req.url
// What it is: The path of the request URL.

// Example:

// You visit http://localhost:3000/about

// req.url will be '/about'

// Use it to: Handle different routes like /home, /login, /api/data, etc.

//  2. req.method
// What it is: The HTTP method used for the request.

// Common values: 'GET', 'POST', 'PUT', 'DELETE'

// Example:

// You open the browser and hit enter — it sends a GET request.

// You submit a form — it might send a POST request.

//  3. req.headers
// What it is: An object containing the headers sent by the client.

// Headers are like: Metadata about the request.

// Example:

// {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   user-agent: 'Mozilla/5.0 ...',
//   accept: '*/*'
// }
// Use it to: Check content types, authentication tokens, or user agents.


// 

