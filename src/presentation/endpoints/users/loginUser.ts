import { Request, Response } from "express";
import { UserDB } from "../../../data/userDataBase";
import { LoginUserUC } from "../../../business/usecase/loginUser";

export const loginUserEndpoint = async (req: Request, res: Response) => {
  try {
    const loginUserUC = new LoginUserUC(new UserDB());
    const result = await loginUserUC.execute({
      email: req.body.email,
      password: req.body.password
    });
    res.send({message: "Usuario logado com sucesso"});
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
