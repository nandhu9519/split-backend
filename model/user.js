const { emit } = require("nodemon");
module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  const Users = mongoose.model("Users", schema, collectionName);
  return Users;
};
