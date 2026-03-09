//Noe Chairez 3/9/2026

import express from 'express';
import cors from 'cors';

  


const app = express();
const PORT = process.env.PORT || 3001;

//middleware...
app.use(cors({
    origin: 'http://localhost:5173'      //got from our React frontend
}));

app.use (express.json());               //allows Express to read JSON requests


//health check endpoint --> confirms the server is running....
app.get('/api/health', (req,res) => {
    res.status(200).json({ status: 'ok' });
});

//Starting the Server.....
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);      //NOTE TO SELF: use backticks(`) NOT single quotes(')
});


