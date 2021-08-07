import { buildSchema, SchemaMetaFieldDef } from "graphql";
const schema = buildSchema(
    `type Query{
    hello: String
}`
);

export default schema;
