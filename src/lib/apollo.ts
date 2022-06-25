import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4t3ngm82w9u01z13p8xeliu/master",
  cache: new InMemoryCache(),
});
