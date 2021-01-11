import { ApolloServer, gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};


const auth = ({ req }) => {
  console.log('request arrived');

}

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: auth, introspection: true, playground: true });
export default apolloServer;

