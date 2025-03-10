function toCase(text) {
	uText = text.toUpperCase();
	lText  = text.toLowerCase();
	return `${lText}-${uText}`
  // write your code here
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
