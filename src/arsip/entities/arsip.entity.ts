import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Klasifikasi } from "src/klasifikasi/entities/klasifikasi.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Arsip {

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;
    
    @ManyToOne(() => User, user => user.arsip)
    @Field(() => User)
    user: User;

    @OneToOne(() => Klasifikasi)
    @Field(() => Klasifikasi)
    klasifikasi: Klasifikasi;

    @Column()
    @Field()
    kodeDivisi: string;

    @Column()
    @Field()
    kodeJudul: string;

    @Column({nullable:true})
    @Field({nullable:true})
    kodeSubJudul: string;

    @Column()
    @Field()
    userId: string;

    @Column()
    @Field()
    no_definitif: number;

    @Column({nullable:true})
    @Field({nullable:true})
    kode_klasifikasi: number;

    @Column()
    @Field()
    nama_uraian_berkas: string;

    @Column()
    @Field()
    tahun_berkas: number;

    @Column({nullable:true})
    @Field({nullable:true})
    jangka_waktu_simpanan: number;

    @Column({nullable:true})
    @Field({nullable:true})
    tingkat_perkembangan: string;

    @Column({nullable:true})
    @Field({nullable:true})
    status_arsip: string;
}