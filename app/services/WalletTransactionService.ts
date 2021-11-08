
import { getConnection, getRepository } from "typeorm";
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

    
    public async walletTransction(trascationData:IWalletTransaction){
        
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            let walletData = this.getWalletById(trascationData.walletId, true)
            if (! walletData){
                throw new WalletError("Wallet doesnot exist!!.", 404)
            }
            let {wallet, walletTras} = walletTrasaction(trascationData, walletData)
            // execute some operations on this transaction:
            await queryRunner.manager.save(wallet);
            await queryRunner.manager.save(walletTras);
            // commit transaction now:
            await queryRunner.commitTransaction();
        } catch (err) {
            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
        return true
    }

    
}

export default new WalletTransactionService()