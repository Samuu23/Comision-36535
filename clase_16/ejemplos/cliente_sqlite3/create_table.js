const { options } = require('./options/options')
const knex = require('knex')(options)

knex.schema.dropTableIfExists('messages')
	.finally(() => {
		knex.schema.createTable('messages', table => {
			table.increments('id').primary()
			table.string('email').notNullable()
			table.timestamp('send_at').defaultTo(knex.fn.now());
			table.string('message').notNullable()
		})
			.then(() => console.log('SQLite3 Table created'))
			.catch((err) => { console.log(err); throw err })
			.finally(() => { knex.destroy() })
	})
