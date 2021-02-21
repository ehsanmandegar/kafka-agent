import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSubscriber } from './user.subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenTreater } from '../../entities/gen-treater';

@Module({
  imports: [TypeOrmModule.forFeature([GenTreater])],
  controllers: [UserSubscriber],
  providers: [UserService],
})
export class UserModule {}
