import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateArsipInput {

    @Field(() => Int)
    id: number;

    @Field({nullable:true})
    no_definitif: number;

    @Field({nullable:true})
    kode_klasifikasi: number;

    @Field({nullable:true})
    nama_uraian_berkas: string;

    @Field({nullable:true})
    tahun_berkas: number;
    
    @Field({nullable:true})
    jangka_waktu_simpanan: number;

    @Field({nullable:true})
    tingkat_perkembangan: string;

    @Field({nullable:true})
    status_arsip: string;

    @Field({nullable:true})
    userId: string;

    @Field({nullable:true})
    kodeDivisi: string;

    @Field({nullable:true})
    kodeJudul: string;

    @Field({nullable:true})
    kodeSubJudul: string;
}