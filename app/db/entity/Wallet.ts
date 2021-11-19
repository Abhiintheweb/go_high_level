import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('wallet')
export class Wallet {

    @PrimaryGeneratedColumn()
    "id": number;

    @Column({name:'user_id',unique:true})
    "useId": number;


    @Column({name:'is_active'})
    "isActive": boolean;

    @Column({name:'total_amount'})
    "totalAmount": number;

    @CreateDateColumn({name:'created_at'})
    "createdAt"?: Date;

    @UpdateDateColumn({name:'updated_at'})
    "updatedAt"?: Date;

}
