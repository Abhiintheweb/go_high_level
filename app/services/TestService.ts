
import { getRepository } from "typeorm";
import {User} from "../db/entity/User";

class TestService{

    public  async test(data:any){

        // let u = new User()
        // u.firstName='test'
        // u.lastName='test2'
        // u.age=10
        // return await getRepository(User).save(u)

        return await getRepository(User).find()
    }
}


export default new TestService()