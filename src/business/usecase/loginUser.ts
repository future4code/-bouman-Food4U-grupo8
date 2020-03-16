import { UserGateway } from "../gateways/userGateway"
import * as bcrypt from "bcrypt"

export class LoginUserUC {
    constructor(private userGateway: UserGateway) { }

    public async execute(input: LoginUserUCInput) {

        const user = await this.userGateway.loginUser(input.email)

        if (!user) {
            throw new Error("Email incorreto")
        }

        const isPaswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if (!isPaswordCorrect) {
            throw new Error("Senha incorreta")
        }

        return true
    }

}
export interface LoginUserUCInput {
    email: string
    password: string
}




