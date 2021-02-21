import { DynamicModule, Global, Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Global()
@Module({})
export class KafkaModule {
  static forRoot(kafkaConfig): DynamicModule {
    return {
      global: true,
      module: KafkaModule,
      imports: [],
      providers: [
        {
          provide: KafkaService,
          useValue: new KafkaService(kafkaConfig),
        },
      ],
      exports: [KafkaService],
    };
  }
}
