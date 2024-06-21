// complete the given function

function palindrome(str){
	let str=str.toLowerCase();
	let a=str.split("").reverse().join("");
	if(a==str){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
