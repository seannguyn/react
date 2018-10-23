// req.params.id
// req.method
const JWT     = require('jsonwebtoken')
const User    = require('../Models/User')
const jwt_key = require('../Config/key').jwt_key

signToken = user => {
  const token = JWT.sign({
    iss: 'seannguyn',
    sub: user._id,
    iat: new Date().getTime(),
    // exp: new Date().getTime() + 60*60*3, // current date + 1
  }, jwt_key )

  return token;
}

module.exports = {

  signUp: async (req, res, next) => {

    //init
    console.log("signup called...",req.value.body);

    // check if email already existed
    const {email, password} = req.value.body;
    const findUser = await User.findOne({email})

    if (findUser) {
      return res.status(403).json({error: "email already registered"})
    }

    // create new user
    const newUser = new User({
      email,
      password
    })

    await newUser.save()

    //respond with token
    // take a payload and a secret string

    res.json({'token': signToken(newUser)})
  },

  signIn: async (req, res, next) => {

    console.log(req.value.body,"req.value.body");
    console.log(req.user,"req.user");

    // const {email, password} = req.value.body;
    // const findUser = await User.findOne({email})

    const findUser = req.user

    res.json({'token': signToken(findUser)})
  },

  secret: async (req, res, next) => {
    console.log("i manage to get here");
    res.json({'secret': 'true'})
  }
}
