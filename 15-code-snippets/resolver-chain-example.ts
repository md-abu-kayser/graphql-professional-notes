const resolvers = {
  Query: {
    user: (_, { id }, { dataSources }) => dataSources.users.getById(id),
  },
  User: {
    posts: (user, _, { dataSources }) => dataSources.posts.getByUserId(user.id),
  },
};
