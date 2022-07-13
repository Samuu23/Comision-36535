import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'

const RedisStore = connectRedis(session)
// Para obtener compatibilidad con versiones anteriores
const client = redis.createClient({ legacyMode: true })
await client.connect()

const app = express()
app.use(session({
	// Persistencia en redis
	store: new RedisStore({
		host: 'localhost',
		port: 6390,
		client: client,
		ttl: 300
	}),

	// Session config
	secret: 'secret wars',
	resave: false,
	saveUninitialized: false /*,
	cookie: { maxAge: 40000 } */
}))

app.get('/', (req, res) => {
	res.send('Server Express OK!')
})

let contador = 0
app.get('/sin-sesion', (req, res) => {
	res.send({ contador: ++contador })
})

app.get('/con-sesion', (req, res) => {
	if(req.session.contador) {
		req.session.contador++
		res.send(`You had visited the site ${req.session.contador} times`)
	} else {
		req.session.contador = 1
		res.send('Welcome!')
	}
})

// Logout
app.get('/logout', (req, res) => {
	req.session.destroy(err => {
		if (!err) { res.send('Logout OK!') }
		else { res.send({ status: 'Logout ERROR', body: err }) }
	})
})

app.get('/info', (req, res) => {
	console.log(`req.session: ${req.session}`)
	console.log(`req.sessionID ${req.sessionID}`)
	console.log(`req.cookies ${req.cookies}`)
	console.log(`req.sessionStore ${req.sessionStore}`)

	res.send('Send OK!')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server on PORT ${PORT}`))
