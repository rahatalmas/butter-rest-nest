import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, Column, PrimaryColumn } from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { Employee } from '../../employee-management/entities/employee.entity';
import { Registry } from '../../auth/entities/registry.entity';
import { MetaData } from '../../../common/meta-data/meta-data';
import { Role } from '../../role/entities/role.entity';
@Entity({ name: 'company' })
export class Company extends MetaData {

  @PrimaryColumn('uuid')
  id: string;

  @Column({ name: 'admin_name', type: 'text', nullable: false })
  admin_name: string;

  @Column({ name: 'about_company', type: 'text', nullable: true })
  about_company?: string;

  @Column({ name: 'company_logo', type: 'varchar', length: 255, nullable: true })
  company_logo?: string;

  @Column({ name: 'country', type: 'varchar', length: 100 })
  country: string;

  @Column({ name: 'language', type: 'varchar', length: 50 })
  language: string;

  @Column({ name: 'timezone', type: 'varchar', length: 50 })
  timezone: string;

  @OneToMany(() => Department, (department) => department.company)
  departments: Department[];

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  @OneToMany(() => Role, (role) => role.company)
  roles: Role[];
}
