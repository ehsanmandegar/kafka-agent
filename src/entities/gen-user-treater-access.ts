import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genUserTreaterAccess', ['pkfUserTreaterAccess'], { unique: true })
@Entity('genUserTreaterAccess', { schema: 'dbo' })
export class GenUserTreaterAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserTreaterAccess' })
  pkfUserTreaterAccess: number;

  @Column('int', { name: 'FkfUserAccess' })
  fkfUserAccess: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('bit', { name: 'access' })
  access: boolean;
}
