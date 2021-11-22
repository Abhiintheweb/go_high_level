
import { getRepository } from "typeorm";
import {Wallet} from "../db/entity/Wallet";
import walletTransction from '../services/WalletTransactionService';
import userService from '../services/UserService';

class WalletService{

    public  async getAllTransaction(data:any){
        return await getRepository(Wallet).find()
    }

    public async setupWallet(req:any){

        let user = await userService.getUserById(req.user_id)
        var wallet = new Wallet()
        wallet.useId = req.userId
        wallet.isActive= true
        wallet.totalAmount= 10
        console.log(req)
        wallet = await getRepository(Wallet).save(wallet)
        
        await walletTransction.captureWalletTranscation(
            'CREDIT', wallet.totalAmount,wallet.id, wallet.useId)

        return wallet
        
    }

    public async getAllWallets(){
        return await getRepository(Wallet).find()
    } 
}


export default new WalletService()