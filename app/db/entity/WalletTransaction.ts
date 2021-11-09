import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from 'typeorm';

@Entity('wallet_transaction')
export class WalletTransaction {

    @PrimaryGeneratedColumn()
    "id": number;

    @Column({name:'user_id'})
    "useId": number;

    @Column({name:'wallet_id'})
    "walletId": number;

    @Column({name:'is_active'})
    "isActive": boolean;

    @Column({name:'amount'})
    "amount": number;

    @Column({name:'transaction_type'})
    "transactionType": string;

    @CreateDateColumn({name:'created_at'})
    "createdAt"?: Date;

    @UpdateDateColumn({name:'updated_at'})
    "updatedAt"?: Date;

}
