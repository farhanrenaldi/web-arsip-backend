import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateArsipInput {

    @Field()
    no_definitif: number;

    @Field({nullable:true})
    kode_klasifikasi: number;

    @Field()
    nama_uraian_berkas: string;

    @Field()
    tahun_berkas: number;
    
    @Field({nullable:true})
    jangka_waktu_simpanan: number;

    @Field({nullable:true})
    tingkat_perkembangan: string;

    @Field({nullable:true})
    status_arsip: string;

    @Field()
    userId: string;

    @Field()
    kodeDivisi: string;

    @Field()
    kodeJudul: string;

    @Field({nullable:true})
    kodeSubJudul: string;
}