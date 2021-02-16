export const SUBSCRIBER_REF_MAP = new Map();
export const SUBSCRIBER_OBJ_REF_MAP = new Map();

export function SubscribeTo(topic) {
  return (target, propertyKey, descriptor) => {
    const originalMethod = target[propertyKey];
    SUBSCRIBER_REF_MAP.set(topic, originalMethod);
    SUBSCRIBER_OBJ_REF_MAP.set(topic, target);
    return descriptor;
  };
}
