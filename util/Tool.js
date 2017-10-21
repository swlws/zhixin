const fs = require('fs');
const path = require('path');

let mkdir = dirname => {
	//console.log(dirname);  
	if (fs.existsSync(dirname)) {  
		return true;  
	} else {  
		if (mkdir(path.dirname(dirname))) {  
			fs.mkdirSync(dirname);  
			return true;  
		}  
	}  
}

module.exports = {
	mkdir
}