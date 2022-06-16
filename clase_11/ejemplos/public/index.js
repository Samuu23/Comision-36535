const socket = io()

socket.on('My message', data => {
	alert(data)
	socket.emit('Notification', 'Message succesful recieved')
})
