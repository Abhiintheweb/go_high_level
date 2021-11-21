
import { getConnection, getManager, getRepository } from "typeorm";
import { ParsedQs } from "qs";
import { WalletTransaction } from "../db/entity/WalletTransaction";
import { Wallet } from "../db/entity/Wallet";
import { WalletError } from "../errors/WalletErrors";
import { IWalletTransaction } from "../interfaces/walletTrasaction";
import { walletTrasaction } from "../utils/WalletTrasactionUtils";

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

    private async validateWallate(walletId:number){
        let walletData = await this.getWalletById(walletId, true)
        if (! walletData){
            throw new WalletError("Wallet doesnot exist!!.", 404)
        }
        return walletData
    }

    
    public async walletTransction(trascationData:IWalletTransaction){
        let walletData = await this.validateWallate(trascationData.walletId)
        var w_tra = walletTrasaction(trascationData, walletData)
        var walletDataObj = w_tra[0]
        var walletTrasObj = w_tra[1]
        let w_trasaction =  await this.walletTransaction(walletDataObj, walletTrasObj)
        return w_trasaction 
    }

    public async allWalletTransactions(wallateID ){
        let transactions = await getRepository(WalletTransaction).find({
            where:{
                walletId:wallateID 
            },
            order:{
                createdAt:'ASC'
            }
        })
        let amount=0
        let allTransactions: any = []
        for (var tras of transactions){
            
            var trans: any = tras
            if (tras.transactionType === 'DEBIT'){
                amount -= tras.amount
            }else if(tras.transactionType === 'CREDIT'){
                amount += tras.amount
            }
            trans.balance = amount
            console.log(trans)
            allTransactions.push(trans)
        }
        return allTransactions
    }

    public async captureWalletTranscation(transactionType:string, 
        amount:number, 
        walletId:number, 
        userId:number){

            let walletTrans = new WalletTransaction()
            walletTrans.amount=amount
            walletTrans.useId=userId
            walletTrans.walletId=walletId
            walletTrans.transactionType=transactionType

            return await getRepository(WalletTransaction).save(walletTrans)


    }
    
}

export default new WalletTransactionService()