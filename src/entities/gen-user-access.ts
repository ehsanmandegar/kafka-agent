import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenFormAccess } from './gen-form-access';
import { GenUser } from './gen-user';

@Index('PK_genUserAccess', ['pkfUserAccess'], { unique: true })
@Entity('genUserAccess', { schema: 'dbo' })
export class GenUserAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserAccess' })
  pkfUserAccess: number;

  @Column('bit', { name: 'access' })
  access: boolean;

  @ManyToOne(
    () => GenFormAccess,
    (genFormAccess) => genFormAccess.genUserAccesses,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfFormAccess', referencedColumnName: 'pkfFormAccess' },
  ])
  fkfFormAccess: GenFormAccess;

  @ManyToOne(() => GenUser, (genUser) => genUser.genUserAccesses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfUser', referencedColumnName: 'pkfUser' }])
  fkfUser: GenUser;

  @RelationId((genUserAccess: GenUserAccess) => genUserAccess.fkfFormAccess)
  fkfFormAccess2: number;

  @RelationId((genUserAccess: GenUserAccess) => genUserAccess.fkfUser)
  fkfUser2: number;
}
