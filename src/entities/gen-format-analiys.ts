import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genFormatAnaliys', ['pkflayout'], { unique: true })
@Entity('genFormatAnaliys', { schema: 'dbo' })
export class GenFormatAnaliys {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkflayout' })
  pkflayout: number;

  @Column('image', { name: 'layoutFile' })
  layoutFile: Buffer;

  @Column('nvarchar', { name: 'layoutName', length: 200 })
  layoutName: string;

  @Column('bit', { name: 'defaultLayout' })
  defaultLayout: boolean;

  @Column('int', { name: 'FkfSystem' })
  fkfSystem: number;

  @Column('nvarchar', { name: 'formName', length: 250, default: () => "''" })
  formName: string;
}
