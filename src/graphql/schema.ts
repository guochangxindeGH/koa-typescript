//schema.js
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("graphql");
const queryObj = new GraphQLObjectType({
    name: "myFirstQuery",
    description: "a hello world demo",
    fields: {
        hello: {
            name: "a hello world query",
            description: "a hello world demo",
            type: GraphQLString,
            resolve(parentValue: any, args: any, request: any) {
                console.log(parentValue, args, request);
                return "hello world !";
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: queryObj
});

