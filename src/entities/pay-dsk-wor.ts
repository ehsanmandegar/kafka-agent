import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payDSKWor', ['pkfDskWor'], { unique: true })
@Entity('payDSKWor', { schema: 'dbo' })
export class PayDskWor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDSKWor' })
  pkfDskWor: number;

  @Column('int', { name: 'fkfTreater', nullable: true })
  fkfTreater: number | null;

  @Column('int', { name: 'fk_AgentID', nullable: true })
  fkAgentId: number | null;

  @Column('nvarchar', { name: 'job_No', nullable: true, length: 50 })
  jobNo: string | null;

  @Column('nvarchar', { name: 'emp_No', nullable: true, length: 10 })
  empNo: string | null;

  @Column('nvarchar', { name: 'FkfEmployeeType', nullable: true, length: 10 })
  fkfEmployeeType: string | null;

  @Column('nvarchar', { name: 'DSW_ID', length: 10 })
  dswId: string;

  @Column('int', { name: 'DSW_YY' })
  dswYy: number;

  @Column('int', { name: 'DSW_MM' })
  dswMm: number;

  @Column('nvarchar', { name: 'DSW_LISTNO', length: 12 })
  dswListno: string;

  @Column('nvarchar', { name: 'DSW_ID1', nullable: true, length: 8 })
  dswId1: string | null;

  @Column('nvarchar', { name: 'DSW_FNAME', length: 20 })
  dswFname: string;

  @Column('nvarchar', { name: 'DSW_LNAME', length: 25 })
  dswLname: string;

  @Column('nvarchar', { name: 'DSW_DNAME', nullable: true, length: 20 })
  dswDname: string | null;

  @Column('nvarchar', { name: 'DSW_IDNO', nullable: true, length: 15 })
  dswIdno: string | null;

  @Column('nvarchar', { name: 'DSW_IDPLC', nullable: true, length: 30 })
  dswIdplc: string | null;

  @Column('nvarchar', { name: 'DSW_IDATE', nullable: true, length: 8 })
  dswIdate: string | null;

  @Column('nvarchar', { name: 'DSW_SEX', nullable: true, length: 3 })
  dswSex: string | null;

  @Column('nvarchar', { name: 'DSW_NAT', nullable: true, length: 10 })
  dswNat: string | null;

  @Column('nvarchar', {
    name: 'DSW_OCP',
    nullable: true,
    length: 50,
    default: () => '(24032)',
  })
  dswOcp: string | null;

  @Column('nvarchar', {
    name: 'DSW_Job',
    nullable: true,
    length: 100,
    default: () => "''",
  })
  dswJob: string | null;

  @Column('nvarchar', { name: 'DSW_SDATE', nullable: true, length: 8 })
  dswSdate: string | null;

  @Column('nvarchar', { name: 'DSW_EDATE', nullable: true, length: 8 })
  dswEdate: string | null;

  @Column('int', { name: 'DSW_DD', nullable: true })
  dswDd: number | null;

  @Column('int', { name: 'DSW_ROOZ', nullable: true })
  dswRooz: number | null;

  @Column('bigint', { name: 'DSW_MAH', nullable: true })
  dswMah: string | null;

  @Column('bigint', { name: 'DSW_MAZ', nullable: true })
  dswMaz: string | null;

  @Column('bigint', { name: 'DSW_MASH', nullable: true })
  dswMash: string | null;

  @Column('bigint', { name: 'DSW_TOTL', nullable: true })
  dswTotl: string | null;

  @Column('int', { name: 'DSW_BIME', nullable: true })
  dswBime: number | null;

  @Column('int', { name: 'DSW_BIMEKar', nullable: true, default: () => '(0)' })
  dswBimeKar: number | null;

  @Column('int', { name: 'DSW_BIMEWork', nullable: true, default: () => '(0)' })
  dswBimeWork: number | null;

  @Column('nvarchar', { name: 'PER_NATCOD', nullable: true, length: 10 })
  perNatcod: string | null;

  @Column('int', { name: 'DSW_PRATE', nullable: true })
  dswPrate: number | null;
}
