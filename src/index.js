module.exports = function reverse (n) {
	n < 0 ? n = 0 - n : n;
	return +(n+"").split("").reverse().join("");
};
