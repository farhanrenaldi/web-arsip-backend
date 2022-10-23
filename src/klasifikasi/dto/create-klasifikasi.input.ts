import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateKlasifikasiInput {

  @Field()
  kodeDivisi: string;

  @Field()
  kodeJudul: string;

  @Field()
  judul: string;

  @Field({nullable: true})
  kodeSubJudul?: string;

  @Field({nullable: true})
  subJudul?: string;

  @Field(() => Int, {nullable: true})
  jangkaSimpananAktif?: number;

  @Field(() => Int, {nullable: true})
  jangkaSimpananInaktif?: number;
}
