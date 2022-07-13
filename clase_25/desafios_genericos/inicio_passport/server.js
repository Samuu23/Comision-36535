const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcryp = require('bcrypt')
const express = require('express')
const router = require('./src/routes/routes')
const { engine } = require('express-handlebars')
const User = require('./src/models/usuario')

// Funciones
function isValidPassword(user, password){
	return bcryp.compareSync(password, user.password)
}

function createHash(password){
	return bcryp.hashSync(password, bcryp.genSaltSync(10), null)
}

// Login
passport.use('login', new LocalStrategy(
	(username, password, done) => {
		User.findOne({ username: username }, (err, user) => {
			if(err) { console.log('Error'); return done(err) }

			if(!user) { console.log(`User not found: ${username}`); return done(null, false) }

			if(!isValidPassword(user, password)) {
				console.log('Invalid Password')
				return done(null, false)
			}

			return done(null, user)
		})
	}
))

// Register
passport.use('signup', new LocalStrategy({ passReqToCallback: true },
	(req, username, password, done) => {
		console.log('Holi')
		User.findOne({ 'username': username }, (err, user) => {
			if(err) { console.log(`Error in signup: ${err}`); return done(err) }
			
			if(user) { console.log(`User already exists: ${user}`) }

			console.log(req.body)

			const newUser = {
				username: username,
				password: createHash(password),
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName
			}


			User.create(newUser, (err, userWithId) => {
				if(err) { console.log(`Error saving user: ${err}`); return done(err) }

				console.log(user)
				console.log(`User Registration succesful`)
				return done(null, userWithId)
			})
		})
	}
))

// Serializacion
passport.serializeUser((user, done) => {
	done(null, user._id)
})

passport.deserializeUser((id, done) => {
	User.findById(id, done)
})

// App
const app = express()

// Settings
app.use(session({
	secret: 's3cr3t',
	cookie: {
		httpOnly: false,
		secure: false,
		maxAge: 60000
	},
	rolling: true,
	resave: false,
	saveUninitialized: false

}))

app.use(passport.initialize())
app.use(passport.session())

app.engine('hbs', engine({
	extname: 'hbs',
	defaultLayout: 'index.hbs',
	layoutsDir: `${__dirname}/src/views/layouts`,
	runtimeOptions: {
		allowProtoPropertiesByDefault: true,
		allowProtoMethodsByDefault: true
	}
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')
app.use(express.static(`${__dirname}/src/public`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
//Index
app.get('/', router.getRoot)

// Login
app.get('/login', router.getLogin)
app.post('/login', passport.authenticate('login', { failureRedirect: '/fail-login' }), router.postLogin)
app.get('/fail-login', router.getFailLogin)

// Signup
app.get('/signup', router.getSignup)
app.post('/signup', passport.authenticate('signup'), router.postSignup)
app.get('/fail-signup', router.getFailSignup)

// Profile
app.get('/profile', router.getProfile)

// Logout
app.get('/logout', router.getLogout)

app.get('/ruta-protegida', router.checkAuthentication, (req, res) => {
    res.render('protected')
});
// Fail Route
app.get('*', router.failRoute)

// Listen
app.listen(3000, () => { console.log(`Server on Port ${3000}`) })
