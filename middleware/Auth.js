import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    var token = bearer[1];
    jwt.verify(token, userController.JWTsecret, (error, data) => {
      if (error) {
        res.status(401);
        res.json({ error: "Token Inválido!" });
      } else {
        req.token = token;
        req.LoggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ error: "Token Inválido!" });
  }
};

export default { Authorization };