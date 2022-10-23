import { InputType, Field } from '@nestjs/graphql';
import { Roles } from '../entities/role.enum';

@InputType()
export class CreateUserInput {

  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Roles)
  role: Roles;

}
