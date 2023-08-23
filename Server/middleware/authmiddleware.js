import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    // console.log(token)
  
    // if (!token) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }
  
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, "asdkahsgdnas/'wer.3'r[3''/df,lfu0weokr,'we4,r[ppfe'w;e,fjowjef");
      // console.log(decoded)
      // console.log(req.user)
      req.user = decoded; // Attach the decoded token to the request object
      next();
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
  };