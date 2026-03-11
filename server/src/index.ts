//Noe Chairez 3/9/2026

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  //located at server/src/db/index.ts
import authRoutes from './routes/authRoutes';  

dotenv.config();    //load .env file for process.env vars are available 

import './db';   //triggers the connection test when started up


const app = express();
const PORT = process.env.PORT || 3001;

//middleware..............
//allow requests from React frontend
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173'      //got from our React frontend: this is the link to check webpage
}));

app.use (express.json());               //allows Express to read JSON requests

//........................................  ROUTES  ..................................................

app.use('/api/auth', authRoutes);


//health check endpoint --> confirms the server is running....      <--- use to verify if other sets ups are working
app.get('/api/health', (req,res) => {
    res.status(200).json({ status: 'ok' });
});

//..............................  Starting the Server  .....................................
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);      //NOTE TO SELF: use backticks(`) NOT single quotes(')
});


