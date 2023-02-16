import { MongoClient } from 'mongodb'

export default defineEventHandler(async () => {
  const client = new MongoClient('')
  await client.connect()
  const db = client.db('test');
})