// import { v4 } from "uuid"
// import { UserGateway } from "../../gateways/userGateway"

// import * as bcrypt from "bcrypt"

// export class GetUserInfoUC {
//     constructor(private userGateway: UserGateway) { }

//     async execute(input: GetUserInfoInput): Promise<GetUserInfoOutput> {
//         const user = await this.userGateway.getUserInfo(input.id)
//         if(!user) {
//             throw new Error("Usuário não encontrado")
//         }
//         return {
//             id: user.getId(),
//             email: user.getEmail()
//         }
//     }
// }

// export interface GetUserInfoInput {
//     id: string;
// }

// export interface GetUserInfoOutput {
//     id: string;
//     email: string;
// }
