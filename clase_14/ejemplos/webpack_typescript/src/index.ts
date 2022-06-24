import express from 'express'
import { getTime } from './lib/utils'
import Persona from './Persona'

const p: Persona = new Persona('Coder', 'House')

const app = express()

app.get('/', (req, res) => {
	res.send({
		time: getTime(),
		fullName: p.getFullName()
	})
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server on port ${PORT}`))
