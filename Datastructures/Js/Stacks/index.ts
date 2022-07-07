import StackFunc, { STACK } from './stack';

const stack: STACK = StackFunc(15);

stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');

process.stdout.write('\nInitial Stack In Object Format\n');
console.log(stack.viewStack());

process.stdout.write('\nSize Of Stack\n');
console.log(stack.size());

process.stdout.write('\nGet Current Element From Stack\n');
console.log(stack.peek());

stack.pop();

process.stdout.write('\View Stack In Object Format\n');
console.log(stack.viewStack());

process.stdout.write('\nSize Of Stack\n');
console.log(stack.size());

process.stdout.write('\nGet Current Element From Stack\n');
console.log(stack.peek());