import { UserGateway } from "../../gateways/userGateway";
import * as bcrypt from "bcrypt";

export class UpdateUserPasswordUC {
  constructor(private usergateway: UserGateway) {}

  async execute(input: UpdateUserInput) {
    
    const newPassword = await this.usergateway.updateUserPassword(input.newPassword, input.id);
   
  }
}

export interface UpdateUserInput {
    newPassword: string;
    id: string,
    previousPassword: string

}
