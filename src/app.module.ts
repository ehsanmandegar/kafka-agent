import { TypeOrmConfig } from './config/typeorm.config';
import { Global, Module } from '@nestjs/common';
import { KafkaModule } from './app/kafka/kafka.module';
import { KafkaConfig } from './config/kafka.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './app/user/user.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    KafkaModule.forRoot(KafkaConfig),
    UserModule,
  ],
  controllers: [],
  providers: [],
  exports: [KafkaModule],
})
export class AppModule {}
