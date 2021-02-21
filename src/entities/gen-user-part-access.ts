import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genUserPartAccess', ['pkfUserPartAccess'], { unique: true })
@Entity('genUserPartAccess', { schema: 'dbo' })
export class GenUserPartAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserPartAccess' })
  pkfUserPartAccess: number;

  @Column('int', { name: 'FkfUserAccess' })
  fkfUserAccess: number;

  @Column('int', { name: 'FkfPart' })
  fkfPart: number;

  @Column('bit', { name: 'access' })
  access: boolean;
}
