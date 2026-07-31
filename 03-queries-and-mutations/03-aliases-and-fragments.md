# Aliases & Fragments

Aliases rename fields in response. Fragments avoid duplication:

```graphql
fragment userFields on User {
  id
  name
  email
}
query {
  user1: user(id: 1) {
    ...userFields
  }
  user2: user(id: 2) {
    ...userFields
  }
}
```
