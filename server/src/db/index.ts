import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();      //fires up the .env file

const {Pool} = pg;   

//create connection pool using DATABASE_URL located in /server/src/.env 
const pool = new Pool({
    connectionString: process.env.DATABASE_URL 
});

//test the connection when server has started up
pool.connect((err, client, release) => {
    if(err){
        console.error('Bad News: Error connecting to Database:', err.message);
    } else {
        console.log('If Your Reading This: Connection to PostgreSQL was Successful !');
        release();   //release the client back to the pool
    }
});

//helper function for clean usage throughout the app 
const db = {
    query: (text: string, params?: unknown[]) => pool.query(text, params)
};

export default db;

