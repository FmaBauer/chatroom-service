import { db } from '../lib/mongo.js'
import { ObjectId } from 'mongodb'

export default {
  async getMessages(args) {
    const messages = await db.collection('message')
      .find({ chatroom_id: args.chatroomId }).toArray()
    return messages
  },
  async getMessage(args) {
    const messages = await db.collection('message')
      .find({ _id: new ObjectId(args.id) }).toArray()
    return messages[0]
  },
  async sendMessage(args) {
    const result = await db.collection('message')
      .insertMany([{
        content: args.msg, sender_id: args.userId,
        send_time: new Date().getTime(), chatroom_id: args.roomId,
        quote_message_id: args.quoteMsgId
      }])
    return result
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