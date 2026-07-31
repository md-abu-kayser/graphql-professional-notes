# Input Types

```graphql
input CreateUserInput { name: String!; email: String! }
type Mutation { createUser(input: CreateUserInput!): User! }
```
