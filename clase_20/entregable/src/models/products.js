const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	code: { type: String, required: true },
	pic: { type: String, required: true },
	price: { type: String, required: true },
	stock: Number
}, { timestamps: true })

const products = mongoose.model('products', ProductSchema)

module.exports = products
