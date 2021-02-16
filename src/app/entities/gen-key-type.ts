import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_genKeyType', ['keyType'], { unique: true })
@Index('PK_genKeyType', ['pkfKeys'], { unique: true })
@Entity('genKeyType', { schema: 'dbo' })
export class GenKeyType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfKeys' })
  pkfKeys: number;

  @Column('nvarchar', { name: 'keyType', length: 50 })
  keyType: string;
}
