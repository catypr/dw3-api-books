import userService from "../services/userService.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const JWTsecret = process.env.JWTSECRET;

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.getOne(email);

    if (user == undefined) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      await userService.Create(name, email, hash);
      res.status(201).json({ success: "Usuário cadastrado com sucesso." });
    } else {
      res.status(409).json({ error: "Usuário informado já está cadastrado." });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getOne(email);

    if (user != undefined) {
      const correct = bcrypt.compareSync(password, user.password);

      if (correct) {
        jwt.sign(
          { id: user.id, email: user.email },
          JWTsecret,
          { expiresIn: "48h" },
          (error, token) => {
            if (error) {
              res.status(400).json({
                error: "Não foi possível gerar o token de autenticação.",
              });
            } else {
              res.status(200).json({ token });
            }
          }
        );
      } else {
        res.status(404).json({ error: "Credenciais inválidas." });
      }
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser, JWTsecret };
