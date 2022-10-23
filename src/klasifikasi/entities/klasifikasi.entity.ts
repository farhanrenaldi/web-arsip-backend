import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Klasifikasi {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  idKlas: number;

  @Column()
  @Field()
  kodeDivisi: string;

  @Column()
  @Field()
  kodeJudul: string;

  @Column()
  @Field()
  judul: string;

  @Column({nullable: true})
  @Field({nullable: true})
  kodeSubJudul?: string;

  @Column({nullable: true})
  @Field({nullable: true})
  subJudul?: string;

  @Column({nullable: true})
  @Field(() => Int, {nullable: true})
  jangkaSimpananAktif?: number;

  @Column({nullable: true})
  @Field(() => Int, {nullable: true})
  jangkaSimpananInaktif?: number;

}
