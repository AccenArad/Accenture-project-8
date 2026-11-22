const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Accenture Capstone - Project 8</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            font-family: Arial, sans-serif;
        }

        .card {
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            width: 450px;
        }

        h1 {
            color: #4f46e5;
        }

        p {
            color: #555;
        }

        .status {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 30px;
            background: #22c55e;
            color: white;
            font-weight: bold;
        }

        .footer {
            margin-top: 25px;
            color: #999;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Accenture Capstone Project 8</h1>
        <p>Docker application running successfully.</p>
        <div class="status">Status: Healthy</div>
        <div class="footer">
            Built and deployed locally using Docker
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
