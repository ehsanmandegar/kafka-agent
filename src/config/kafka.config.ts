const { KAFKA_HOST, KAFKA_PORT } = process.env;
export const KafkaConfig = {
  brokers: [`${KAFKA_HOST}:${KAFKA_PORT}`],
  groupId: 'agent-group',
  clientId: 'ahanafzar-agent',
};
