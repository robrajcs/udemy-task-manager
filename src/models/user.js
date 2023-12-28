const mongoose = require("mongoose");
const validator = require("validator");

// mongoose.connect("mongodb://127.0.0.1:27017/udemy-task-manager-api", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Passrosd must not contain "password"');
      }
    },
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
    trim: true,
    lowercase: true,
  },
});

module.exports = User;

// const me = new User({ name: "Róbert Ráturdő", age: 49, email: "mike@con.com" });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
