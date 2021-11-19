

import { Request, Response } from 'express';


import walletTransction from '../services/WalletTransactionService';

export class WalletTransactionController{
    
    public async Post(req:Request,res:Response){
        try {
            let wallet_trasaction = await walletTransction.walletTransction(req.body)
            
            res.json({"response":wallet_trasaction, "message":"Transaction was successful"})

        } catch (error) {
            console.log(error);
            
            res.json(error.status_code|| 500).send({"error":error.message})
        }
        
    }

    public async Get(req:Request,res:Response){
        var wallet_id = req.query.wallet_id
        let wallet_trasaction = await walletTransction.allWalletTransactions(wallet_id)
        res.json({"response":wallet_trasaction})

    }
}