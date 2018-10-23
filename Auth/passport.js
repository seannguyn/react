const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const jwt_key = require('./Config/key').jwt_key
const User    = require('./Models/User')
const localStrategy = require('passport-local')

passport.use(new JwtStrategy ({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey:jwt_key
}, async (payload, done) => {
  try {
    //Find the user in the token
    const user = await User.findOne({_id: payload.sub})
    console.log("user is: ",user);

    if (!user) {
      return done(null,false)
    }

    //if user doesnt exist, handle it
    return done(null,user)

  } catch(error) {
    done(error,false)
  }
}))

// localStrategy
passport.use(new localStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {

    // Find user with the given email
    const foundUser = await User.findOne({email})

    // check if exist
    if (!foundUser) {
      return done(null,false)
    }

    // check if valid passwords
    const matched = await foundUser.isValidPassword(password, foundUser.password)

    if (!matched) {
      return done(null,false)
    }

    done(null, foundUser)

  } catch (error) {
    done(error,null)
  }
}))
