// complete the given function

function palindrome(str){
	let a=str.split("").reverse().join("");
	if(a==str){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
