import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Omer Arieli",
    email: "Omer@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Josh Taub",
    email: "Josh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
