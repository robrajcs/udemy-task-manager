const mongoose = require("mongoose");
const validator = require("validator");
// const bcrypt = require("bcryptjs");

// mongoose.connect("mongodb://127.0.0.1:27017/udemy-task-manager-api", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// taskSchemaSchema.pre("save", async function (next) {
//   const task = this;

//   if (task.isModified("password")) {
//     task.password = await bcrypt.hash(task.password, 8);
//   }

//   next();
// });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
