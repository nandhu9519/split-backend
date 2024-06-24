const { Users } = require("../model");
const { getUserDetails, userSignup } = require("../services/user");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const userExist = await getUserDetails(req.body.email);
  if (userExist)
    return res.status(409).json({ error: "email already registered" });
  else await userSignup(req.body);
  res.status(201).json({ message: "user registered" });
};

const userLogin = async (req, res) => {
  const userExist = await getUserDetails(req.body.email);
  if (!userExist) return res.status(404).json({ error: "user not found" });
  if (!userExist.password === req.body.password)
    return res.status(404).json({ message: "Incorrect password" });

  const { accessToken, refreshToken } = generateUserToken(userExist);

  return res
    .status(200)
    .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
    .cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
    .json({ userId: userExist._id, message: "login successful" });
};

const generateUserToken = (user) => {
  const accessToken = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    }
  );

  const refreshToken = jwt.sign(
    {
      _id: user._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_LIFE,
    }
  );

  return { accessToken, refreshToken };
};

module.exports = { userSignUp, userLogin };
