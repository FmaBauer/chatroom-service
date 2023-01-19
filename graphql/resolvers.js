import service from "../service/index.js"
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export default {
  Query: {
    messages: (parent, args, contextValue, info) => {
      return service.getMessages({ chatroomId: args.chatroomId })
    },
    chatrooms: (parent, args, contextValue, info) => {
      return service.getChatrooms()
    },
  },
  Message: {
    sender(parent) {
      return service.getUser({ id: parent.sender_id })
    },
    quote_message(parent) {
      return service.getMessage({ id: parent.quote_message_id })
    }
  },
  Chatroom: {
    members(parent) {
      return service.getUsersByIds(parent.members)
    }
  }
};
