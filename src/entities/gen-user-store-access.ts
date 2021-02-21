import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genUserStoreAccess', ['pkfUserStoreAccess'], { unique: true })
@Entity('genUserStoreAccess', { schema: 'dbo' })
export class GenUserStoreAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserStoreAccess' })
  pkfUserStoreAccess: number;

  @Column('int', { name: 'FkfUserAccess' })
  fkfUserAccess: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('bit', { name: 'access' })
  access: boolean;
}
