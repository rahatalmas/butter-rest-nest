import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { MetaData } from "../../../common/meta-data/meta-data";
import { Company } from "../../company/entities/company.entity";

@Entity({ name: 'user_registry' })
export class Registry extends MetaData {
  @PrimaryGeneratedColumn("uuid", { primaryKeyConstraintName: "pk_user_id" })
  id: string;

  @Column()
  businessName: string;

  @Column({ type: "varchar", length: 20, unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  refreshToken: string;

  // Inverse side of one-to-one
  @OneToOne(() => Company, (company) => company.registry)
  company: Company;
}
