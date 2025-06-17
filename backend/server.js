import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';
import env from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
env.config();

const db = new pg.Client({

    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT

});

db.connect();

app.get('/api/fetchformdata', (req, res) => {

    res.send('Fatching data....')

});

app.post('/api/fetchformdata', async (req, res) => {

    try { 

        const { firstname, lastname, email, mobile, message } = req.body;

        const result = await db.query('SELECT * FROM usertable WHERE email = $1', [email]);

        if (result.rows.length > 0) {
            
            res.json({ message: "User already exists" });

        } else {
    
            await db.query('INSERT INTO usertable(firstname, lastname, email, mobile, message) VALUES($1, $2, $3, $4, $5)', [firstname, lastname, email, mobile, message]);
            
        }

    } catch (err) {
        
        console.log(err);

    }

});

app.listen(PORT, () => {

    console.log(`Server is started on port ${PORT}`);

});
