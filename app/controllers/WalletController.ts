

import { Request, Response } from 'express';


import walletService from '../services/WalletService';

export class WalletController{
    

    public async Get(req:Request,res:Response){
        
        let wallets = await walletService.getAllWallets()
        res.json({"data":wallets})
    }

    public async Post(req:Request,res:Response){
        try {
            let wallet = await walletService.setupWallet(req.body)
            res.json({"data":wallet})
        } catch (error) {
            res.status(error.status_code|| 500).json({"error":error.message})
        }


        
    }
}