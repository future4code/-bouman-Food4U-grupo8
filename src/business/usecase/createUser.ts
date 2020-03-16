import { v4 } from "uuid"
import { UserGateway } from "../gateways/userGateway"
import { User } from "../entities/user";
import * as bcrypt from "bcrypt"

export class CreateUserUC {
  constructor(private userGateway: UserGateway) { }

  public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {

    try {
      const id = v4();
      const SALT_ROUNDS = 10
      const hashPassword = await bcrypt.hash(input.password, SALT_ROUNDS)
      const user = new User(
        id,
        input.email,
        hashPassword
      )
      
      if(input.password.length < 6){ //verificar mensagem não esta aparecendo
        throw new Error("Sua senha deve conter no minimo 6 caracteres");
      }

      await this.userGateway.createUser(user)
    } catch (e) {
      console.log(e)
      throw new Error("Houve um problema em criar o usuario");
      
    }
    return {
      message: "Usuario criado com sucesso"
    }
  }

}
export interface CreateUserUCInput {
  email: string
  password: string
}

export interface CreateUserUCOutput {
  message: string
}


