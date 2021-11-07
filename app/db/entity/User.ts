// import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    "id": number;

    @Column({name:'name'})
    "name": string;

    @Column({name:'date_of_birth'})
    "dateOfBirth": Date;

    @Column({name:'is_active'})
    "isActive": boolean;

    @Column({name:'password'})
    "password": string;

    @Column({name:'created_at'})
    "createdAt": Date;

    @Column({name:'updated_at' })
    "updatedAt": Date;

}
