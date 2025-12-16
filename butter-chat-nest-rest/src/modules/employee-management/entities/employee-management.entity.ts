import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MetaData } from '../../../common/meta-data/meta-data';

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  RETIRED = 'RETIRED',
}

export enum EmployeeShift {
  DAY = 'DAY',
  NIGHT = 'NIGHT',
}

@Entity({ name: 'employee_management' })
export class EmployeeManagement extends MetaData {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  companyId: string;

  @Column({ type: 'uuid', nullable: false })
  departmentId: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  lastName: string;

  @Column({ type: 'varchar', length: 150, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string; // hashed before saving

  @Column({ type: 'varchar', length: 20, nullable: true })
  phoneNumber?: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth?: string;

  @Column({ type: 'date', nullable: true })
  joiningDate?: string;

  @Column({ type: 'enum', enum: EmployeeStatus, default: EmployeeStatus.ACTIVE })
  status: EmployeeStatus;

  @Column({ type: 'enum', enum: EmployeeShift, nullable: false })
  shift: EmployeeShift;
}
