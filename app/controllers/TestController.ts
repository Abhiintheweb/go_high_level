
// import { ContactSchema } from '../models/TestModel';
import { Request, Response } from 'express';


import testService from '../services/TestService';

export class IndexController{
    

    public async Test(req:Request,res:Response){
        let x= await testService.test(123)
        res.json({"response":x})
    }

    public Test2(req:Request,res:Response){
        res.send({"response":"Post Api"})
    }
}