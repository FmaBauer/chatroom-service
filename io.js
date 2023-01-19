import { Server } from 'socket.io'
import service from "./service/index.js"

export default function(server) {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000"]
    }
  })

  io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('chat message', async (msg) => {
      await service.sendMessage(msg)
      socket.broadcast.emit('chat message', msg)
    })
  })
}