var calc = {
	add: function (num1, num2) {
		return num1 + num2;
	},
	sub: function (num1, num2) {
		return num1 - num2;
	},
	multiply: function (num1, num2) {
		return num1 * num2;
	},
	divide: function (num1, num2) {
		if (num2 != 0) {
			return num1 / num2;;
		}else{
			return "can't divide by zero"
		}
		
	},
	power: function (num1, num2) {
		return Math.pow(num1, num2);
	},
};
module.exports = calc;
