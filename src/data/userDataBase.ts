import { BaseDB } from "./baseDataBase";
import { User } from "../business/entities/user";

export class UserDB extends BaseDB {
    private userTableName = "user";

    async createUser(user: User) {
        await this.connection.insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into(this.userTableName)
    }

    async loginUser(email: string): Promise<User | undefined> {
        const user = await this.connection.select("*").from(this.userTableName).where({ email })
        if (!user[0]) {
            return undefined
        }

        return new User(user[0].id, user[0].email, user[0].password)
    }

    async getUser(id: string): Promise<User | undefined> {
        const user = await this.connection.select("*").from(this.userTableName).where({id})
        if(!user[0]) {
            return undefined
        }

        return new User(user[0].id, user[0].email, user[0].password)
    }
}
