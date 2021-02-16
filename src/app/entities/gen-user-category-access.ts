import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genUserCategoryAccess', ['pkfUserCa'], { unique: true })
@Entity('genUserCategoryAccess', { schema: 'dbo' })
export class GenUserCategoryAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserCA' })
  pkfUserCa: number;

  @Column('int', { name: 'FkfCategory' })
  fkfCategory: number;

  @Column('int', { name: 'FkfUserAccess' })
  fkfUserAccess: number;

  @Column('bit', { name: 'access' })
  access: boolean;
}
