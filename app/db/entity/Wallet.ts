import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('wallet')
export class Wallet {

    @PrimaryGeneratedColumn()
    "id": number;

    @Column({name:'user_id'})
    "useId": number;


    @Column({name:'is_active'})
    "isActive": boolean;

    @Column({name:'total_amount'})
    "totalAmount": number;

    @Column({name:'created_at'})
    "createdAt": Date;


    @Column({name:'updated_at'})
    "updatedAt": Date;


}
