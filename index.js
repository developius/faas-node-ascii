const imageToAscii = require('image-to-ascii')
const getStdin = require('get-stdin')

process.stdin.setEncoding('utf8');

getStdin().then(url => {
	url = url.trim()
	imageToAscii(url, {
		size: { width: 800 }
	}, (err, converted) => {
		console.log(err || converted)
	})
})
