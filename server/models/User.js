const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    auth0Id: {
      type: String,
      sparse: true, // No unique constraint, only sparse to allow undefined/null values
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.auth0Id;
      },
    },
  },
  { timestamps: true },
  { collection: "users" }
);

mongoose.set("debug", true);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method for password comparison
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
