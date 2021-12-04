import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
  username: String,
  text: String, // ? needed ?
});

const Participant = mongoose.model("Participant", participantSchema);

participantSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default Participant;
