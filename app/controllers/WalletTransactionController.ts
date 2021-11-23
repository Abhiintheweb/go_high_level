

import { Request, Response } from 'express';
import walletTransction from '../services/WalletTransactionService'

export class WalletTransactionController{
    
    public async Post(req:Request,res:Response){
        try {
            let wallet_trasaction = await walletTransction.walletTransction(req.body)
            
            res.json({"data":wallet_trasaction, "message":"Transaction was sucessful"})

        } catch (error) {
            
            res.status(error.status_code|| 500).json({"error":error.message})
        }
        
    }

    public async Get(req:Request,res:Response){
        var wallet_id = req.query.wallet_id
        let wallet_trasaction = await walletTransction.allWalletTransactions(wallet_id)
        res.json({"data":wallet_trasaction})

    }
}