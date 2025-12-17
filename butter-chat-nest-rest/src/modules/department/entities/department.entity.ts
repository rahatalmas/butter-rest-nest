import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { MetaData } from '../../../common/meta-data/meta-data';
import { Employee } from '../../employee-management/entities/employee.entity';
import { Company } from '../../company/entities/company.entity';

@Entity({ name: 'department' })
@Unique(['company_id', 'department_name'])
@Index('idx_department_company_id', ['company_id'])
export class Department extends MetaData {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_id', type: 'uuid', nullable: false })
  company_id: string;

  @Column({ name: 'department_name', type: 'varchar', length: 150 })
  department_name: string;

  @Column({ name: 'employee_count', type: 'int', default: 0 })
  employee_count: number;

  @Column({ name: 'department_bio', type: 'text', nullable: true })
  department_bio?: string;

  @Column({ name: 'department_profile_uri', type: 'text', nullable: true })
  department_profile_uri?: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];

  @ManyToOne(() => Company, (company) => company.departments, {
    onDelete: 'CASCADE',
  })
  
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
