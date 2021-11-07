

import { Request, Response } from 'express';


import walletService from '../services/WalletService';

export class WalletSetupController{
    

    public async Post(req:Request,res:Response){
        res.send({"response":"Post Api"})
    }
}