
import { getRepository } from "typeorm";
import {User} from "../db/entity/User";

class UserService{

    public  async createUser(){

        let u = new User()
        u.name= 'Test'
        u.isActive=true
        u.password="sdadsdw233221"
        u.dateOfBirth = new Date("1991-02-01")
        return await getRepository(User).save(u)
    }

    public async getAllUsers(){

        return await getRepository(User).find()
    }

    public async getUserById(userId:number){
        let user =  await getRepository(User).find({id:userId, isActive:true})
        if (user.length < 1){
            throw  Error('Invalid UserId')
        }
        return user
       
    }
}


export default new UserService()