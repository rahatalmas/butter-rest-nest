import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../company/entities/company.entity';

@Entity({ name: 'roles' })
@Index(['company_id', 'name'], { unique: true })
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid' })
    company_id: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @ManyToOne(() => Company, (company) => company.departments, {
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'company_id' })
    company: Company;
}

