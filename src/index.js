function check(str, bracketsConfig) {
    const brackets = {};
    bracketsConfig.forEach(el => {
        brackets[el[1]] = el[0];
    });

    const openBrackets = Object.values(brackets);

    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const top = stack[stack.length - 1];
        if (str[i] === brackets[str[i]]) {
            if (str[i] === top) {
                stack.pop();
                continue;
            }
        }
        if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else {
            const bracket = stack.pop();
            if (bracket !== brackets[str[i]]) {
                return false;
            }
        }
    }

    console.log(stack, openBrackets);
    return stack.length === 0;
}

module.exports = check;
