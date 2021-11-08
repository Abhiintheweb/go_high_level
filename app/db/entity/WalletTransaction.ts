import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

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

    @Column({name:'created_at'})
    "createdAt": Date;

    @Column({name:'updated_at'})
    "updatedAt": Date;

}
