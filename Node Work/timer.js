var count = 0;
var t = setInterval(function () {
	if (++count <= 5) {
		console.log(`setInterval: Hey! ${count} millisecond completed!..`);
	} else {
		clearInterval(t);
	}
}, 1000);
