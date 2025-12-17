import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, Column } from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { Employee } from '../../employee-management/entities/employee.entity';
import { Registry } from '../../auth/entities/registry.entity';
import { MetaData } from '../../../common/meta-data/meta-data';

@Entity({ name: 'company' })
export class Company extends MetaData{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'about_company', type: 'text', nullable: true })
  about_company?: string;

  @Column({ name: 'company_logo', type: 'varchar', length: 255, nullable: true })
  company_logo?: string;

  @OneToMany(() => Department, (department) => department.company)
  departments: Department[];

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  // Owning side of one-to-one
  @OneToOne(() => Registry, (registry) => registry.company, { cascade: true })
  @JoinColumn({ name: 'registry_id' }) // FK column in company table
  registry: Registry;
}

