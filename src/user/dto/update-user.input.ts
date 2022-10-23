import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Roles } from '../entities/role.enum';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {

  @Field()
  id: string;

  @Field({nullable:true})
  email: string;

  @Field({nullable:true})
  password: string;

  @Field(() => Roles, {nullable:true})
  role: Roles;
}