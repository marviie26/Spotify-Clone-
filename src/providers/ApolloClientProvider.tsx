import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'https://muskegon.stepzen.net/api/irreverent-uakari/__graphql',
  headers: {
    Authorization:
      'apikey muskegon::stepzen.net+1000::00718a394e5afde0393fa2f853e08e1130fb30db258d30c4b640df1b7665060e',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
;