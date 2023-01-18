
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export default `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Query {
    users: [User]
    messages(chatroomId: ID!): [Message]
    chatrooms: [Chatroom]
  }
  type User {
    _id: String
    short_name: String
    full_name: String
    intro: String
  }
  type Message {
    id: String
    content: String
    send_time: String
    quote_message: Message
    sender: User
    chat_room: Chatroom
  }
  type Chatroom {
    id: String
    title: String
    # latest_message: [Message]
    members: [User]
  }
`;