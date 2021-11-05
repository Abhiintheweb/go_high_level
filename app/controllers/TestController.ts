
// import { ContactSchema } from '../models/TestModel';
import { Request, Response } from 'express';




export class IndexController{

    public Test(req:Request,res:Response){
        res.json({"response":"Get Api"})
    }

    public Test2(req:Request,res:Response){
        res.send({"response":"Post Api"})
    }
}