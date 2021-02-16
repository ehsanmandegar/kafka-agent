import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karValidationType', ['pkfValidationType'], { unique: true })
@Entity('karValidationType', { schema: 'dbo' })
export class KarValidationType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfValidationType' })
  pkfValidationType: number;

  @Column('nvarchar', {
    name: 'validationType',
    length: 50,
    default: () => "''",
  })
  validationType: string;
}
