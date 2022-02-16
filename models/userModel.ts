import mongoose, { Document, Model, model, Types, Schema, Query, ConnectOptions, mongo } from "mongoose"


const userSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  isAdmin: { type: Boolean, required: true, default: false },
  
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
