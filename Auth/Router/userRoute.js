
const express = require('express')
const router = require('express-promise-router')()
const {schemas, validateBody} = require('../Helper/routeHelpers')
const passport = require('passport')
const passportConfig = require('../passport')
const userController = require('../Controllers/userController')

const passportSignin = passport.authenticate('local', {session: false})
const passportSecret = passport.authenticate('jwt', {session: false})

router.route('/signup')
  .post(validateBody(schemas.authSchema), userController.signUp);

router.route('/signin')
  .post(validateBody(schemas.authSchema), passportSignin, userController.signIn)

// bind a router to a middleare function
router.route('/secret')
  .get(passportSecret, userController.secret)

module.exports = router
