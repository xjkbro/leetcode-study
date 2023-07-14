function isValid(s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		// console.log(stack, stack[stack.length - 1]);
		// check the top of stack if matching brace
		if (
			(stack[stack.length - 1] == "(" && s[i] == ")") ||
			(stack[stack.length - 1] == "{" && s[i] == "}") ||
			(stack[stack.length - 1] == "[" && s[i] == "]")
		)
			stack.pop();
		else stack.push(s[i]);
	}
	if (stack.length == 0) return true;
	else return false;
}

console.log(isValid("()")); // true
console.log(isValid("(){}[]")); // true
console.log(isValid("(]")); // false
console.log(isValid("(({}))")); // true
