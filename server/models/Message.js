import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
  username: String,
  message: String, // ? needed ?
  time: Date,
})

const Message = mongoose.model('Message', messageSchema)

messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default Message
