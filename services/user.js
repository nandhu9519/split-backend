const { Users } = require('../model/index')
const getUserDetails =  async (email) => {
    const userExist = await Users.findOne({ email });
    return userExist;
}

const userSignup = async (userInfo) => {
    await Users.create({ username: userInfo.username, email: userInfo.email, password: userInfo.password });
    return;
}
module.exports = { getUserDetails, userSignup }
 