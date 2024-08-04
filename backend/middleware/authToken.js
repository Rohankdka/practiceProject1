import jwt from "jsonwebtoken";

export const authToken = (req,res,next)=>{
    const token = req.cookies.token;
    console.log('cookies:',req.cookies);
    console.log('Token:',token);

    if(!token){
        return res.status(400).send({message:"Token is not Provided"})
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, 'secret_key');
        
        // Attach decoded token to request object for use in other routes
        req.user = { id: decoded.id, email: decoded.email };
        next(); // Proceed to the next middleware or route handler

    } catch(error){
        if(error.name==='TokenExpiredError'){
            return res.status(400).json({message:"Token has expired"})
        }
        return res.status(400).json({message:"Invalid token"})
    }
    
    
}