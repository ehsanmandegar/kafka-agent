import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genConfigImport', ['pkfConfigImport'], { unique: true })
@Entity('genConfigImport', { schema: 'dbo' })
export class GenConfigImport {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConfigImport' })
  pkfConfigImport: number;

  @Column('nvarchar', { name: 'sqlIP', length: 150, default: () => "''" })
  sqlIp: string;

  @Column('nvarchar', { name: 'sqlUser', length: 150, default: () => "''" })
  sqlUser: string;

  @Column('nvarchar', { name: 'sqlPass', length: 150, default: () => "''" })
  sqlPass: string;

  @Column('nvarchar', { name: 'sqlDbName', length: 150, default: () => "''" })
  sqlDbName: string;
}
