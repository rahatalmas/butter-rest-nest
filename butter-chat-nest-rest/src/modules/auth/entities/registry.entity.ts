import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MetaData } from "../../../common/meta-data/meta-data";

@Entity({name:'user_registry'})
export class Registry extends MetaData {
    @PrimaryGeneratedColumn("uuid",{ primaryKeyConstraintName: "pk_user_id" })
    id:string
    
    @Column()
    business_name: string

    @Column({ type: "varchar", length: 20, unique: true, nullable: false })
    email: string

    @Column({nullable: false})
    password: string

    @Column({nullable: false})
    refresh_token: string
}
