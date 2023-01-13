import QueueFunc, { QUEUE } from './Queue';

const queue: QUEUE = QueueFunc(15);

queue.push('A');
queue.push('B');
queue.push('C');
queue.push('D');

process.stdout.write('\nInitial Queue In Object Format\n');
console.log(queue.viewQueue());

process.stdout.write('\nSize Of Queue\n');
console.log(queue.size());

process.stdout.write('\nGet Current Element From Queue\n');
console.log(queue.peek());

queue.shift();

process.stdout.write('\View Queue In Object Format\n');
console.log(queue.viewQueue());

process.stdout.write('\nSize Of Queue\n');
console.log(queue.size());

process.stdout.write('\nGet Current Element From Queue\n');
console.log(queue.peek());