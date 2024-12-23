import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //refrencing User model to connect to users collection in mongoDB.
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
