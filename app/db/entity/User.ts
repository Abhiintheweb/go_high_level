// import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

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

    @CreateDateColumn({name:'created_at'})
    "createdAt"?: Date;

    @UpdateDateColumn({name:'updated_at'})
    "updatedAt"?: Date;

}
