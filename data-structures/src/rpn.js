/**
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
      inputs like "4 5 *" rather than "45*" or "4 4*"
 */
function rpn(expression) {
    const operators = new Set(['+', '-', '*', '/']);
    const stack = [];
    const tokens = expression.split(' ');
    for (const token of tokens) {
        if (operators.has(token)) {
            const a = stack.pop();
            const b = stack.pop();
            const expr = `${a} ${token} ${b}`;
            const result = eval(expr);
            stack.push(result);
        } else {
            stack.push(token);
        }
    }
    return stack.length === 1 ? stack[0] : 'Invalid RPN';
}
