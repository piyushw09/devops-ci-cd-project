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
                overflow: hidden;
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
            button {
                margin-top: 20px;
                padding: 10px 20px;
                font-size: 18px;
                border: none;
                border-radius: 5px;
                background: #ff9800;
                color: white;
                cursor: pointer;
            }
            button:hover {
                background: #e68900;
            }

            canvas {
                position: fixed;
                top: 0;
                left: 0;
                pointer-events: none;
            }
        </style>
    </head>
    <body>

        <canvas id="fireworks"></canvas>

        <div class="card">
            <h1>🚀 DevOps CI/CD Pipeline</h1>
            <p>Successfully deployed using Jenkins, Docker & AWS</p>
            <p><b>Author:</b> Piyush Wadatkar</p>

            <button onclick="startFireworks()">🎉 Celebrate</button>
        </div>

        <script>
            const canvas = document.getElementById('fireworks');
            const ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            let particles = [];

            function createFirework(x, y) {
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: x,
                        y: y,
                        radius: Math.random() * 3,
                        color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
                        speedX: (Math.random() - 0.5) * 5,
                        speedY: (Math.random() - 0.5) * 5
                    });
                }
            }

            function animate() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                particles.forEach((p, i) => {
                    p.x += p.speedX;
                    p.y += p.speedY;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();

                    if (p.radius > 0.1) p.radius -= 0.05;
                    else particles.splice(i, 1);
                });

                requestAnimationFrame(animate);
            }

            function startFireworks() {
                for (let i = 0; i < 5; i++) {
                    createFirework(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height / 2
                    );
                }
            }

            animate();
        </script>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});
