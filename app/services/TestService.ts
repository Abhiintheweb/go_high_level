
import { getRepository } from "typeorm";
import {User} from "../db/entity/User";

class TestService{

    public  async test(data:any){

        let s = await getRepository(User).find()
        return s
    }
}


export default new TestService()