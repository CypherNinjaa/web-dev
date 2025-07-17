// 2.Create a greeting module. Greeting module prints Good morning, Good afternoon and Good night based 
//on the current time.
function getgreeting() {
	let now = new Date();
	let time = now.getHours();
	//console.log(time);
	if (time > 5 && time < 12) {
		console.log("Good Morning");
	} else if (time > 13 && time < 15) {
		console.log("Good After noon");
	} else if (time > 15 && time < 21) {
		console.log("Good Evening");
	} else if ((time > 21 && time < 24) || (time > 0 && time < 5)) {
		console.log("Good Night");
	}
}
getgreeting();
