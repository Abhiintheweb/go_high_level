


import { Request, Response } from 'express';
import userService from '../services/UserService'

export class UserController{
    
    public async Post(req:Request,res:Response){
        let user = await userService.createUser();
        res.json({data:user})
        
    }

    public async Get(req:Request,res:Response){
        let users = await userService.getAllUsers()
        res.json({data: users})
    }
  
}