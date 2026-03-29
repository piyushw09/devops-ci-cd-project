const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>DevOps CI/CD App</title>
        <style>
            body {
                font-family: Arial;
                background: linear-gradient(to right, #4facfe, #00f2fe);
                text-align: center;
                color: white;
                margin-top: 100px;
            }
            .card {
                background: rgba(0,0,0,0.6);
                padding: 30px;
                border-radius: 10px;
                display: inline-block;
            }
            h1 {
                font-size: 40px;
            }
            p {
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 DevOps CI/CD Pipeline</h1>
            <p>Successfully deployed using Jenkins, Docker & AWS</p>
            <p><b>Author:</b> Piyush Wadatkar</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});
