

import { Request, Response } from 'express';


import walletService from '../services/WalletService';

export class WalletSetupController{
    
    public async Post(req:Request,res:Response){
        await walletService.setupWallet(req)
        res.send({"response":"Post Api"})
    }
}