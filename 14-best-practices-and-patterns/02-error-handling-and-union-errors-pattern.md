# Error Handling – Union Errors Pattern

Return a union of success and error types: `type Mutation { login(input: LoginInput!): LoginResult! }` where `LoginResult = User | InvalidCredentials`.

> 📘 Next: [Nullability & Partial Data](03-nullability-and-partial-data.md)
