import { Request, Response } from "express";
import { UserDB } from "../../../data/userDataBase";
import { GetUserInfoUC } from "../../../business/usecase/users/getUserInfo";
import * as jwt from "jsonwebtoken"
import { UserGateway } from "../../../business/gateways/userGateway"

export const getUserInfoEndpoint = async (req: Request, res: Response) => {

    try {
        const data = jwt.verify(req.headers.auth as string, "lalala") as { id: string }

        // const getUserInfoUC = new GetUserInfoUC(new UserDB());
        
        const input = {
            id: data.id
        }

        // const userInfo = await getUserInfoUC.execute(input)
        
        res.send({ user: data });

        } catch (err) {
            res.status(400).send({
                message: err.message,
                ...err
            });
        }
    };
