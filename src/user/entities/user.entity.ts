import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Arsip } from 'src/arsip/entities/arsip.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Roles } from './role.enum';

@Entity()
@ObjectType()
export class User {

  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field(() => Roles)
  role: Roles;

  @OneToMany( () => Arsip, arsip => arsip.user )
  @Field(() => [Arsip], { nullable: true })
  arsip?: Arsip[];

}
