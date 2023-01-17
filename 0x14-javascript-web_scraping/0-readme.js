#1/usr/bin/node
/**
* Script that reads from a file
*/
const process = require('process');
const fs = require('fs');

const filepath = process.argv[2]

fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
	console.log(err);
    } else {
	console.log(data);
    }
});
