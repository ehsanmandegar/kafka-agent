import { Column, Entity, Index, OneToMany } from 'typeorm';
import { GenUser } from './gen-user';
import { SalStore } from './sal-store';

@Index('PK_genAccessType', ['pkfAccessType'], { unique: true })
@Entity('genAccessType', { schema: 'dbo' })
export class GenAccessType {
  @Column('int', { primary: true, name: 'pkfAccessType' })
  pkfAccessType: number;

  @Column('nvarchar', { name: 'accessType', length: 100 })
  accessType: string;

  @OneToMany(() => GenUser, (genUser) => genUser.fkfAccessType)
  genUsers: GenUser[];

  @OneToMany(() => SalStore, (salStore) => salStore.fkfAccessType)
  salStores: SalStore[];
}
