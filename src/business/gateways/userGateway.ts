import { User } from "../entities/user";

export interface UserGateway {
    createUser(user:User): Promise<void>
    loginUser(email: string): Promise<User | undefined>
    getUserInfo(id: string): Promise<User | undefined> 
}
