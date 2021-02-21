import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalCompanyType } from './sal-company-type';

@Index('PK_salTell', ['pkfTell'], { unique: true })
@Entity('salTell', { schema: 'dbo' })
export class SalTell {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTell' })
  pkfTell: number;

  @Column('nvarchar', { name: 'family', nullable: true, length: 200 })
  family: string | null;

  @Column('nvarchar', { name: 'companyName', nullable: true, length: 200 })
  companyName: string | null;

  @Column('nvarchar', { name: 'tellNo', nullable: true, length: 50 })
  tellNo: string | null;

  @Column('nvarchar', { name: 'mobile', nullable: true, length: 50 })
  mobile: string | null;

  @Column('nvarchar', { name: 'address', nullable: true, length: 500 })
  address: string | null;

  @Column('nvarchar', { name: 'fax', nullable: true, length: 50 })
  fax: string | null;

  @Column('nvarchar', { name: 'url', nullable: true, length: 50 })
  url: string | null;

  @Column('nvarchar', { name: 'email', nullable: true, length: 50 })
  email: string | null;

  @ManyToOne(() => SalCompanyType, (salCompanyType) => salCompanyType.salTells)
  @JoinColumn([
    { name: 'FKFCompanyType', referencedColumnName: 'pkfCompanyType' },
  ])
  fkfCompanyType: SalCompanyType;

  @RelationId((salTell: SalTell) => salTell.fkfCompanyType)
  fkfCompanyType2: number | null;
}
