
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
        var  x = await getRepository(Wallet).findOne({id:walletId, isActive:isActive})
        console.log(x,"))))")
        return x
    }

    private async walletTransaction(wallet:any, walletTras:any){
        console.log("&&&&&",wallet,walletTras)
        const connection =  getConnection();
        const queryRunner =  connection.createQueryRunner();

        try {
            await queryRunner.startTransaction();
            
            // execute some operations on this transaction:
            let wall = await queryRunner.manager.save(wallet);
            let wall_tras = await queryRunner.manager.save(walletTras);
            console.log(wall, wall_tras,"88888888")
            // commit transaction now:
            await queryRunner.commitTransaction();
            return true
        } catch (err) {
            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
        // return true
    }

    
    public async walletTransction(trascationData:IWalletTransaction){
        var walletData = await this.getWalletById(trascationData.walletId, true)
        if (! walletData){
            throw new WalletError("Wallet doesnot exist!!.", 404)
        }
        var {walletData, walletTras} = walletTrasaction(trascationData, walletData)
        let w_trasaction = await this.walletTransaction(walletData, walletTras)

        return w_trasaction
    }
    
}

export default new WalletTransactionService()