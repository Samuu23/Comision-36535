const socket = io()

//  Consinga 2
// socket.on('message', (data) => {
// 	document.querySelector('#message').innerText = data	
// 	console.log(data)
// })

// function inputMessage() {
// 	let message = document.getElementById('input_message').value
// 	// document.querySelector('#message').innerHTML = message
// 	socket.emit('message', message)
// }

// Consinga 3
socket.on('messages', (data) => {
	render(data)
})

const render = (data) => {
	let html = data.map((elem, index) => {
		return `<div> <strong> ${elem.socketId}: </strong> <em> ${elem.message} <em> </div>`
	}).join(" ")
	document.querySelector('#messages').innerHTML = html
}

function sendMessage(e) {
	let message = document.querySelector('#input_message').value

	document.querySelector('#input_message').value = ""

	socket.emit('new-message', message)
	return false
}
