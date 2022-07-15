const express = require('express')
const session = require('express-session')
const { engine } = require('express-handlebars')
const routes = require('./src/routes')
const UserModel = require('./src/models/user')
const TwitterUserModel = require('./src/models/userTwitter')
const passport = require('passport')

const TwitterStrategy = require('passport-twitter').Strategy





