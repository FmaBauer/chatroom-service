import { MongoClient } from 'mongodb'
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
await client.connect();
console.log('Connected successfully to server');
export const db = client.db('chatroom');
