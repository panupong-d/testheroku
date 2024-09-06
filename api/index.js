const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3005;

// เชื่อมต่อกับฐานข้อมูลบน Heroku และเปิดใช้งาน SSL
const connectionString = 'postgres://udhf7vu2d6drn7:pb9df6fc17540a768595eaf0bfcc1d18f8fb9416d07e565d3e9d1b36731f27ebf@c9mq4861d16jlm.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dep78clmaphk9v';
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false // จำเป็นสำหรับ Heroku เพื่อข้ามการตรวจสอบ SSL
  }
});

const data103Routes = require('./routes/data103Routes');
const data1033Routes = require('./routes/data1033Routes');

// เชื่อมต่อกับฐานข้อมูล PostgreSQL
pool.connect((err, client, done) => {
    if (err) {
        console.error('Unable to connect to PostgreSQL:', err.stack);
    } else {
        console.log('Connected to PostgreSQL database');
        client.release(); // ปล่อย client กลับไปที่ pool
    }
});

const swaggerFile = require('./swagger-output.json');
const specs = require('./swaggerOptions.js');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ตั้งค่า CORS Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD, TRACE, CONNECT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

// ตั้งค่า Routes
app.use('/data103', data103Routes);
app.use('/data1033', data1033Routes);

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3005;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
