"use strict";
exports.__esModule = true;
var NodeFunc = function (value) {
    return {
        value: value,
        previous: null,
        next: null
    };
};
var DoublyLinkedListFunc = function () {
    var head = null;
    var tail = null;
    var count = 0;
    var item = null;
    var itemIndex = 0;
    var unshift = function (value) {
        if (!head) {
            setFirstElement(value);
            return;
        }
        var oldHead = head;
        setHeadOnly(value);
        head.next = oldHead;
        oldHead.previous = head;
    };
    var push = function (value) {
        if (!tail) {
            setFirstElement(value);
            return;
        }
        var oldTail = tail;
        setTailOnly(value);
        tail.previous = oldTail;
        oldTail.next = tail;
    };
    var shift = function () {
        if (!head) {
            return null;
        }
        var oldHead = head;
        setHeadOnly(oldHead.next, true);
        return oldHead;
    };
    var pop = function () {
        if (!tail) {
            return null;
        }
        var oldTail = tail;
        setTailOnly(oldTail.previous, true);
        return oldTail;
    };
    var size = function () { return count; };
    var headList = function () { return head; };
    var tailList = function () { return tail; };
    var search = function (value) {
        if (!head) {
            return null;
        }
        var currentNode = head;
        var i = 0;
        while (i < count) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
            i++;
        }
        return null;
    };
    var insertAt = function (value, index) {
        if (!head) {
            setFirstElement(value);
            return;
        }
        if (index === 0) {
            unshift(value);
            return;
        }
        var tailIndex = count - 1;
        if (index === tailIndex) {
            push(value);
            return;
        }
        if (shouldTraverseFromFront(index, tailIndex)) {
            traverseFromFront(index, value);
            return;
        }
        traverseFromBack(index, value);
    };
    var setFirstElement = function (value) {
        head = tail = NodeFunc(value);
        count++;
    };
    var setHeadOnly = function (value, isNode) {
        if (isNode === void 0) { isNode = false; }
        if (isNode) {
            head = value;
            head.previous = null;
            count--;
            return;
        }
        head = NodeFunc(value);
        count++;
    };
    var setTailOnly = function (value, isNode) {
        if (isNode === void 0) { isNode = false; }
        if (isNode) {
            tail = value;
            tail.next = null;
            count--;
            return;
        }
        tail = NodeFunc(value);
        count++;
    };
    var shouldTraverseFromFront = function (index, tailIndex) {
        return index < (tailIndex - index);
    };
    var traverseFromFront = function (index, value) {
        var currentNode = head;
        var currentIndex = 0;
        while (currentIndex <= index) {
            if (currentIndex === index) {
                traverseFromFrontInsert(value, currentNode);
                return null;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return null;
    };
    var traverseFromFrontInsert = function (value, nextNode) {
        var newNode = NodeFunc(value);
        nextNode.previous.next = newNode;
        newNode.previous = nextNode.previous;
        newNode.next = nextNode;
        nextNode.previous = newNode;
        count++;
    };
    var traverseFromBack = function (index, value) {
        var currentNode = tail;
        var currentIndex = count - 1;
        while (currentIndex >= index) {
            if (currentIndex === index) {
                traverseFromBackInsert(value, currentNode);
                return null;
            }
            currentNode = currentNode.previous;
            currentIndex--;
        }
        return null;
    };
    var traverseFromBackInsert = function (value, prevNode) {
        var newNode = NodeFunc(value);
        prevNode.next.previous = newNode;
        newNode.previous = prevNode;
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        count++;
    };
    return {
        headList: headList,
        tailList: tailList,
        size: size,
        unshift: unshift,
        push: push,
        shift: shift,
        pop: pop,
        search: search,
        insertAt: insertAt
    };
};
exports["default"] = DoublyLinkedListFunc;
