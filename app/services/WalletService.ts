
import { getRepository } from "typeorm";
import {Wallet} from "../db/entity/Wallet";

class WalletService{

    public  async getAllTransaction(data:any){
        return await getRepository(Wallet).find()
    }

    public async setupWallet(req){
        
        let wallet = new Wallet()
        wallet.useId = 1
        wallet.isActive= true
        wallet.totalAmount= 10
        wallet.createdAt = new Date()
        wallet.updatedAt = new Date()
        return await getRepository(Wallet).save(wallet)
        
    }
}


export default new WalletService()