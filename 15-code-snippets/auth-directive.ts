import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
export function authDirective(directiveName = 'auth') {
  return { authDirectiveTypeDefs: `directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION`, authDirectiveTransformer: (schema) => mapSchema(schema, { [MapperKind.OBJECT_FIELD]: (fieldConfig) => { ... } }) };
}