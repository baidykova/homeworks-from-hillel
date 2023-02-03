const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let text = '';

function generateKey(length, characters) {
	for(let i = 0; i < length; i++) {
		text += characters.charAt(Math.floor(Math.random() * characters.length));
	}	
	return text;
}

console.log(generateKey(16, characters));