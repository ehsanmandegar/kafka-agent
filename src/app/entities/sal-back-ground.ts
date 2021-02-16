import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salBackGround', ['backGroundcode'], { unique: true })
@Index('PK_backGround', ['pkfBackGround'], { unique: true })
@Entity('salBackGround', { schema: 'dbo' })
export class SalBackGround {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBackGround' })
  pkfBackGround: number;

  @Column('nvarchar', { name: 'backGroundcode', length: 50 })
  backGroundcode: string;

  @Column('nvarchar', { name: 'backGroundDesc', length: 100 })
  backGroundDesc: string;
}
