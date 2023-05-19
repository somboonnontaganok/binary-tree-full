// Model === class == Object Generated 
// For user and profile
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  height: { type: Number, required: true},
  weight: { type: Number, required: true},
  bmi: { type: Number}
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
// module.exports = mongoose.model('Users', UserSchema);

