import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { MetaData } from '../../../common/meta-data/meta-data';
import { Department } from '../../department/entities/department.entity';
import { Company } from '../../company/entities/company.entity';

export enum employee_status {
  ACTIVE = 'ACTIVE',
  RETIRED = 'RETIRED',
}

export enum employee_shift {
  DAY = 'DAY',
  NIGHT = 'NIGHT',
}

@Entity({ name: 'employee_management' })
@Index('idx_employee_company_id', ['company_id'])
@Index('idx_employee_department_id', ['department_id'])
export class Employee extends MetaData {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_id', type: 'uuid', nullable: false })
  company_id: string;

  // MUST be nullable because of SET NULL
  @Column({ name: 'department_id', type: 'uuid', nullable: true })
  department_id?: string;

  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  first_name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  last_name: string;

  @Column({ name: 'email', type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20 })
  phone_number: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  date_of_birth?: string;

  @Column({ name: 'joining_date', type: 'date' })
  joining_date: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: employee_status,
    default: employee_status.ACTIVE,
  })
  status: employee_status;

  @Column({
    name: 'shift',
    type: 'enum',
    enum: employee_shift,
  })
  shift: employee_shift;

  @Column({
    name: 'profile_picture_uri',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  profile_picture_uri?: string;

  @ManyToOne(() => Department, (department) => department.employees, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => Company, (company) => company.employees, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
