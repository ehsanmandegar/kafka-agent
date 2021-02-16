import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Consumer, Kafka, logLevel, Producer } from 'kafkajs';
import {
  SUBSCRIBER_OBJ_REF_MAP,
  SUBSCRIBER_REF_MAP,
} from './decorator/kafka.decorator';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor(private kafkaConfig) {
    this.kafka = new Kafka({
      clientId: this.kafkaConfig.clientId,
      brokers: this.kafkaConfig.brokers,
      logLevel: logLevel.NOTHING,
    });

    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({
      groupId: this.kafkaConfig.groupId,
    });
  }

  async onModuleInit(): Promise<void> {
    await this.connect();

    SUBSCRIBER_REF_MAP.forEach((functionRef, topic) => {
      this.bindAllTopicToFixedConsumer(functionRef, topic);
    });

    await this.consumer.run({
      eachMessage: async ({ topic, message }) => {
        const functionRef = SUBSCRIBER_REF_MAP.get(topic);
        const object = SUBSCRIBER_OBJ_REF_MAP.get(topic);
        await functionRef.apply(object, [message.value.toString()]);
      },
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.disconnect();
  }

  async connect() {
    await this.producer.connect();
    await this.consumer.connect();
  }

  async disconnect() {
    await this.producer.disconnect();
    await this.consumer.disconnect();
    await this.consumer.disconnect();
  }

  async bindAllTopicToFixedConsumer(callback, _topic) {
    await this.consumer.subscribe({ topic: _topic, fromBeginning: false });
  }

  async sendMessage(kafkaTopic: string, kafkaMessage) {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic: kafkaTopic,
        messages: [{ value: JSON.stringify(kafkaMessage) }],
        acks: 1,
      });
      await this.producer.disconnect();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message, e);
      throw new ServiceUnavailableException();
    }
  }
}
