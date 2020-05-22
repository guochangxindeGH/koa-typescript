import "reflect-metadata";
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("k_balls")
export class Balls {
  @PrimaryGeneratedColumn()  // 自增主键
  id: number = 1;

  @Column()
  issue: string = "";

  @Column()
  red1: number = 1;

  @Column()
  red2: number = 1;
}
