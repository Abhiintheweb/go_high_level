

import { Request, Response } from 'express';


import walletTransction from '../services/WalletTransactionService';

export class WalletTransactionController{
    
    public async Post(req:Request,res:Response){
        try {
            let wallet_trasaction = await walletTransction.walletTransction(req.body)
            if (!wallet_trasaction){
                res.send({"response":"Trasaction "})
            }
            console.log("wallet_trasaction",wallet_trasaction)
            // res.send({"response":"Trasaction Sucessfull"})

        } catch (error) {
            console.log(error);
            
            res.status(error.status_code|| 500).send({"error":error.message})
        }
        
    }
}