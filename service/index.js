import { db } from '../lib/mongo.js'
import { ObjectId } from 'mongodb'

export default {
  async getMessages(args) {
    const messages = await db.collection('message')
      .find({chatroom_id: args.chatroomId}).toArray()
    return messages
  },
  async getUser(args) {
    const user = await db.collection('user')
      .find({ _id: new ObjectId(args.id) }).toArray()
    return user[0]
  },
  async getUsersByIds(memberIds) {
    let users = []
    for (let id of memberIds) {
      const user = await db.collection('user')
        .find({ _id: new ObjectId(id) }).toArray()
      users.push(user[0])
    }
    return users
  },
  async getChatrooms() {
    const rooms = await db.collection('chatroom')
      .find({}).toArray()
    
    return rooms
  }
}