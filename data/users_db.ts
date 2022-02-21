import bcrypt from 'bcryptjs';
import { IUserSchemaPassword } from "../models/userModel";

const users: IUserSchemaPassword[] = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true
  },
  {
    name: "Second User",
    email: "second@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false
  },
  {
    name: "Third User",
    email: "third@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false
  }
];

export default users;