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
@Unique(['company', 'department_name']) //the relation
@Index('idx_department_company', ['company']) //the relation, not company_id
export class Department extends MetaData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'department_name', type: 'varchar', length: 150 })
  department_name: string;

  @Column({ name: 'employee_count', type: 'int', default: 0 })
  employee_count: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description?: string;

  @Column({ name: 'department_profile_uri', type: 'text', nullable: true })
  department_profile_uri?: string;

  @ManyToOne(() => Company, (company) => company.departments, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'company_id' }) // DB column stays company_id
  company: Company;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}
