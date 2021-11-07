

import { Request, Response } from 'express';


import walletService from '../services/WalletService';

export class WalletController{
    

    public async Get(req:Request,res:Response){
        // let x= await testService.test(123)
        res.json({"response":'x'})
    }

    public async Post(req:Request,res:Response){
        await walletService.setupWallet('s')
        res.send({"response":"Post Api"})
    }
}