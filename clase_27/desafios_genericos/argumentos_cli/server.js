const processArgs = require('minimist')

const options = {
	default: {
		modo: 'prod',
		puerto: 0,
		debug: false
	}, 
	alias: {
		m: 'modo',
		p: 'puerto',
		d: 'debug'
	}
}

const { modo, puerto, debug, _ } = processArgs(process.argv.slice(2), options)

console.log({ modo, puerto, debug, otros: _ })
