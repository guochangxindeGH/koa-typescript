import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Length, IsEmail } from "class-validator";

@Entity("k_user")
export class User {
    @PrimaryGeneratedColumn()  // 自增主键
    id: number | undefined;

    @Column({
        length: 80
    })
    @Length(10, 80)
    name: string = "";

    @Column({
        length: 100
    })
    @Length(10, 100)
    @IsEmail()
    email: string = "";
}
