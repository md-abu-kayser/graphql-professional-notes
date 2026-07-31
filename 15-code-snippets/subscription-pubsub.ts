import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();
const resolvers = {
  Mutation: { addMessage: (_, { input }) => { const msg = ...; pubsub.publish('MESSAGE_ADDED', { messageAdded: msg }); return msg; } },
  Subscription: { messageAdded: { subscribe: () => pubsub.asyncIterator('MESSAGE_ADDED') } },
};