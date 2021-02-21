import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_UserActivityCenterAccess', ['pkfUserActivityCenterAccess'], {
  unique: true,
})
@Entity('genUserActivityCenterAccess', { schema: 'dbo' })
export class GenUserActivityCenterAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserActivityCenterAccess' })
  pkfUserActivityCenterAccess: number;

  @Column('int', { name: 'FkfTreaterMarkaz' })
  fkfTreaterMarkaz: number;

  @Column('int', { name: 'FkfUserAccess' })
  fkfUserAccess: number;

  @Column('bit', { name: 'access' })
  access: boolean;
}
