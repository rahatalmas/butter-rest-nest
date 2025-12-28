import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { MetaData } from "../../../common/meta-data/meta-data";
import { Company } from "../../company/entities/company.entity";

export enum company_status{
   ACTIVE= 'ACTIVE',
   PENDING='PENDING',
   REJECTED='REJECTED'
}

@Entity({ name: 'user_registry' })
export class Registry extends MetaData {
  @PrimaryGeneratedColumn("uuid", { primaryKeyConstraintName: "pk_user_id" })
  id: string;

  @Column({type: "varchar", unique: true, nullable: false})
  company_name: string;

  @Column({type: "varchar", length: 20, unique: true, nullable: false})
  sub_domain: string

  @Column({ type: "varchar", length: 20, unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    nullable:false,
    name:'status',
    type:'enum',
    enum:company_status,
    default:company_status.PENDING
  })
  status: company_status

  @Column(
    {
      nullable:false,
      name:'db_name'
    }
  )
  db_name:string
}