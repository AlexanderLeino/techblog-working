const { User } = require("../models");

const userData = [
  {
    userName: "Alex",
    password: "SecretPassword",
  },
  {
    userName: "Brandon",
    password: "Alienware7",
  },
  {
    userName: "Travis",
    password: "Alienware6",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
