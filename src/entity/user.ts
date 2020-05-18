import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Length, IsEmail } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()  // 自增主键
    id: number = 1;

    @Column({
        length: 80
    })
    @Length(10, 80)
    name: string = '';

    @Column({
        length: 100
    })
    @Length(10, 100)
    @IsEmail()
    email: string = '';
}
