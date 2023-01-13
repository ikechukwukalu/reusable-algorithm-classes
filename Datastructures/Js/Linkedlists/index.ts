import DoublyLinkedListFunc, { DOUBLYLINKEDLIST } from './DoublyLinkedlist';

const list: DOUBLYLINKEDLIST = DoublyLinkedListFunc();

list.unshift(5);
list.unshift(4);
list.unshift(3);
list.unshift(2);
list.unshift(1);
list.unshift(0.2);
list.unshift(0.1);

list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(10.1);
list.push(10.2);

process.stdout.write('\nInitial List From Head In Object Format\n');
console.log(list.headList());

process.stdout.write('\nInitial List From Tail In Object Format\n');
console.log(list.tailList());

process.stdout.write('\nShow The Size In Object Format\n');
console.log(list.size());

process.stdout.write('\nSearched For A Value\n');
console.log(list.search(6));

list.shift();
list.shift();

process.stdout.write('\nRemoved two items from the top\n');
console.log(list.headList());

list.pop();
list.pop();

process.stdout.write('\nRemoved two items from the bottom\n');

list.insertAt(0, 0);
list.insertAt(11, 10);
list.insertAt(0.5, 1);
list.insertAt(1.5, 3);
list.insertAt(2.5, 5);
list.insertAt(8.5, 11);
list.insertAt(9.5, 13);
list.insertAt(10.5, 15);

process.stdout.write('\nAdded 8 New Items From Index Positions\n');
list.displayListFromHead();
list.displayListFromTail();

list.deleteAt(0); // 0
list.deleteAt(0); // 0.5
list.deleteAt(1); // 1.5
list.deleteAt(2); // 2.5
list.deleteAt(8); // 8.5
list.deleteAt(9); // 9.5
list.deleteAt(11); // 10.5
list.deleteAt(10); // 11

process.stdout.write('\Removed 8 New Items From Index Positions\n');
list.displayListFromHead();
list.displayListFromTail();