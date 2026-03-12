//noe chairez 3/1132026

import { Request, Response } from 'express';  
import bcrypt from 'bcrypt';       //needed for hashing passwords
import jwt from 'jsonwebtoken';    //needed to create and verify tokens
import db from '../db';            //the db helper function



//REGISTER: handles POST /api/auth/register

//creates new user in database 
export async function register(req: Request, res: Response): Promise<void> {

    //req.body contains JSON data sent from React form..
    const { email, password, role } = req.body;

    //verify that the required field actully arrived
    if(!email || !password || !role){
        res.status(400).json({ message:'If your reading this: email,password or role are missing...all are required! '});
        return;     //end here if those 3 dont arrive 
    }

    try {
        //check if user w/ this email already exsists in our Database...
        const existing = await db.query(
            'SELECT id FROM users WHERE email = $1',      //note to self: $1 is placeholder 
            [email]                                       //email is what is being put in '$1'
        );

        if (existing.rows.length > 0){
            //found a user w/ this existing  email --> REJECT IT
            res.status(400).json({ message: 'User ALready Exsists' });
            return;
        }

        //starts Hasing the password prior to storing it 
        //salt rounds = 10
        const hashedPassword = await bcrypt.hash(password, 10);

        //insert new user into the Database
        //RETURNING id, email, role == PostgreSQL is sending back thw new row
        const result = await db.query(
            'INSERT INTO users(email, password, role) VALUES ($1, $2, $3) RETURNING id, email, role',
            [email, hashedPassword, role]     //Note to self: $1 = email, $2 = password ...ect..
        );

        //send back new user W/O THE PASSWORD
        res.status(201).json({ message: 'User Created!', user:result.rows[0] });

    } catch(error){
        //failsafe incase anything foes wring w database
        console.error(error);
        res.status(500).json({ message: 'Server error' });

    }

}



//LOGIN: handles POST /api/auth/login  -->checks credentials and returns JWT token if everything checks out
export async function login(req: Request, res:Response ): Promise<void> {         

    //req.body contains the JSON data sent from React login 
    const { email, password } = req.body;

    //validate that both^ email and password arrived...
    if (!email || !password){
        res.status(400).json({ message: 'If your reading this: Email and/or Password didnt arrive and are required to continue'});
        return;
    }

    try {
        //look at the users by email in the database 
        const result = await db.query(
            'SELECT * FROM users WHERE email = $1', 
            [email]
        );

        //if no user was found: REJECT
        if(result.rows.length === 0){
            res.status(401).json({ message: 'INVALID Email or Password '});
            return
        }

        const user = result.rows[0];   // users record from database 

        //compare plaintext password from form against hashed password stored in DB
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword) {
            //here because the password is wrong
            res.status(401).json({ message: 'INVALID password or email '});
            return;
        }

        //create a JWT token after being verified 
        const token = jwt.sign(
            { id: user.id, role: user.role },
                process.env.JWT_SECRET as string,
            { expiresIn: '24h' }
        );

        //sends the token and user info back to React --> react will store it and use it now everytime they request it 
        res.status(200).json({
            token, 
            user: { id: user.id, email: user.email, role: user.role }
        });

    } catch(error) {
        console.error(error); 
        res.status(500).json({ message: 'Server error' });
    }

}





