const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

// create schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
})

// function that is called before data is saved on DB
UserSchema.pre('save', async function(next) {
  try {
    // generate a salt
    const salt = await bcrypt.genSalt(10);

    const pwHash = await bcrypt.hash(this.password, salt);

    console.log("salt: ",salt);
    console.log("password: ",this.password);
    console.log("pwHash",pwHash);

    this.password = pwHash;
    next();

  } catch(error) {
    next(error)
  }
})

// models methods
UserSchema.methods.isValidPassword = async function(newPassword,hashPW) {
  try {
    return await bcrypt.compare(newPassword, hashPW)

  } catch(error) {
    throw new Error(error)
  }
}

// create model
const User = mongoose.model('user',UserSchema);

module.exports = User;
