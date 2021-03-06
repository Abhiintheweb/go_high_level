
import {Wallet} from '../../app/db/entity/Wallet'
import { IWalletData } from '../../app/interfaces/walletData'

export const wallet = (walletTrasctionData:IWalletData) =>{
    let walletTras = new Wallet()
    walletTras.isActive = true? walletTrasctionData.isActive : false
    walletTras.totalAmount = walletTrasctionData.totalAmount ? walletTrasctionData.totalAmount : 0
    walletTras.useId = walletTrasctionData.useId
    return walletTras
}


export const walletGet = (walletTrasctionData:IWalletData) =>{
    var wallet = {id:walletTrasctionData.walletId, userId:walletTrasctionData.useId}
    return wallet
}