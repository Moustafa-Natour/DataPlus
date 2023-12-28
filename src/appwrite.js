import { Client, Graphql } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658ddadc4a8adf1ed833');

export const graphql = new Graphql(client);