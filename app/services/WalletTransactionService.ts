
import { getConnection, getManager, getRepository } from "typeorm";
import {WalletTransaction} from "../db/entity/WalletTransaction";
import {IWalletTransaction} from "../interfaces/walletTrasaction";
import {WalletError} from '../errors/WalletErrors'
import { walletTrasaction } from "../utils/WalletTrasactionUtils";
import { Wallet } from "../db/entity/Wallet";

class WalletTransactionService{

    public  async getAllWalletTransactions(data:any){
        return await getRepository(WalletTransaction).find()
    }

    public async getWalletById(walletId:number, isActive:boolean){
        return await getRepository(Wallet).findOne({id:walletId, isActive:isActive})
    }

    private async walletTransaction(wallet:any, walletTras:any){
        
        const connection =  getConnection();
        const queryRunner =  connection.createQueryRunner();

        try {
            await queryRunner.connect()
            await queryRunner.startTransaction();
            await queryRunner.manager.save(wallet);
            await queryRunner.manager.save(walletTras);
            await queryRunner.commitTransaction();
        } catch (err) {
            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();
            throw new WalletError(err.message, 404)
        } finally {
            // you need to release query runner which is manually created:
            await queryRunner.release();
            return true
        }
        
    }

    
    public async walletTransction(trascationData:IWalletTransaction){
        let walletData = await this.getWalletById(trascationData.walletId, true)
        if (! walletData){
            throw new WalletError("Wallet doesnot exist!!.", 404)
        }
        var w_tra = walletTrasaction(trascationData, walletData)
        var walletDataObj = w_tra[0]
        var walletTrasObj = w_tra[1]
        let w_trasaction =  await this.walletTransaction(walletDataObj, walletTrasObj)

        return true 
    }
    
}

export default new WalletTransactionService()