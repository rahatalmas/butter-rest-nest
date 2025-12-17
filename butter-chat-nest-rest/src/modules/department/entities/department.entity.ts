import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";
import { MetaData } from "../../../common/meta-data/meta-data";

@Entity({ name: "department" })
@Unique(['companyId', 'departmentName'])
export class Department extends MetaData{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  companyId: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  departmentName: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  employeeCount: number;

  @Column({ type: 'text', nullable: false })
  departmntBio: string;
}
