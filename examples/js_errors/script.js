var list = document.getElementsByTagName("ul");
var asd = getListName();

try {
	if (asd.length > 2) {
		alert("yeah");
	}
} catch (err) {
	console.log(err.message);
}

var d = new Date();
d.wtfMethod();

alert("Goodbye");


function getListName() {
	document.getElementsByTagName("ul");
	// bla bla bla
	// bla bla
	//
}