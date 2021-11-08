
import { Wallet } from '../db/entity/Wallet'
import {WalletTransaction} from '../db/entity/WalletTransaction'
import { WalletError } from '../errors/WalletErrors'
import { IWalletTransaction } from '../interfaces/walletTrasaction'

export const walletTrasaction = (walletTrasctionData:IWalletTransaction, walletData:Wallet) =>{
   
    let walletTras = new WalletTransaction()
    walletTras.walletId = walletTrasctionData.walletId
    walletTras.amount = walletTrasctionData.amount
    walletTras.transactionType = walletTrasctionData.transactionType
    
    switch(walletTrasctionData.transactionType){
        case 'DEBIT':
            if (walletTrasctionData.transactionType == 'DEBIT' && walletData.totalAmount < walletTrasctionData.amount){
                throw new WalletError('Insufficiant Fund.', 400)
            }
            walletData.totalAmount -= walletTrasctionData.amount 
            break;
        case 'CREDIT':
            if (walletTrasctionData.amount > 0){
                throw new WalletError('Amount must be greter than zero.', 400)
            }
            walletData.totalAmount += walletTrasctionData.amount 
            break;
        default:
            throw new WalletError('Transaction must be a credit or debit', 400)

    }
    return {walletData, walletTras}
}