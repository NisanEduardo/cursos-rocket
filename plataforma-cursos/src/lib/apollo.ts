import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qdbot53wgp01xlb4o5dzxi/master",
  cache: new InMemoryCache(),
});
