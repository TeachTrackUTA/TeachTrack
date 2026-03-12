//noe chairez 3/11/2026

//2 functions: verifyToken and requireRole ==> one verifies JWT token and other verifies users role
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


//extended request type so we can attach the user to req
//lets controllers access req.user after the middleware runs 
export interface AuthRequest extends Request {
    user?: {
        id: number;
        role: string;
    };
}

//...........Verify Token.......................
//below middleware runs before any protected route. It checks that request has a valid JWT token
export function verifyToken(req: AuthRequest, res:Response, next: NextFunction) {
    //token comes in the Authorization header: "bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        //no token was provided so reject request 
        res.status(401).json({ message: 'No Token Provided...'});
        return;
    }

    //extract the token only and remove the 'Bearer' part 
    const token = authHeader.split(' ')[1];

    try {
        //verify the token using secret key 
        //if token is invalid/expired --> throw error
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
            id: number;
            role: string;
        };

        //attach decoded user info to request 
        //controller now can access req.user.id and req.user.role
        req.user = decoded;

        next();    //token is valid and now will continue to route handle

    } catch(error) {
        //token is invalid or expired 
        res.status(401).json({ message: 'Invalid or Expired token' });
    }
}


//..................RBAC Middleware...............................
//RBAC = role base access control
//restricts routes to specific roles(student, prof, coordinator)
export function requireRole(...roles: string[]) {
    return (req: AuthRequest, res:Response, next: NextFunction) => {

        if(!req.user) {
            //here if token wasnt verified prior to role 
            res.status(401).json({ message: 'Not Authenticated! '});
            return;
        }

        if (!roles.includes(req.user.role)) {
            //here if user is logged in but doesnt have the right role
            res.status(403).json({ message: 'Access denied '});
            return;
        }

        next();   //here the user does have the right role and now can continue 
    };
}





