import { IUserSchemaPassword } from "../models/userModel";

const users: IUserSchemaPassword[] = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "xxxx",
    isAdmin: true
  },
  {
    name: "Second User",
    email: "second@example.com",
    password: "xxxx",
    isAdmin: false
  },
  {
    name: "Third User",
    email: "third@example.com",
    password: "xxxx",
    isAdmin: false
  }
];