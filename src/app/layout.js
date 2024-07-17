
"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: 'http://localhost:2020/graphql',
  cache: new InMemoryCache(),
});

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );

}
