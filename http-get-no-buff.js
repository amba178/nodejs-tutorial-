const http = require('http')

const url = 'http://nodeprogram.com'

http.get(url, (response) => {
	let c = 0

	response.on('data', (chunk) => {
		c++
		console.log(chunk.toString('utf8'))
	})

	response.on('end', ()=> {
		console.log(`response has ended ${c}`)
	})


}).on('error', (error) => {
	console.log(`Got error: ${error.message}`)
})



