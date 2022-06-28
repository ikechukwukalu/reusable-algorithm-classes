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
    var item;
    var itemIndex = null;
    var unshift = function (value) {
        if (head === null) {
            setFirstElement(value);
            return;
        }
        var oldHead = head;
        setHeadOnly(NodeFunc(value));
        head.next = oldHead;
        oldHead.previous = head;
    };
    var push = function (value) {
        if (tail === null) {
            setFirstElement(value);
            return;
        }
        var oldTail = tail;
        setTailOnly(NodeFunc(value));
        tail.previous = oldTail;
        oldTail.next = tail;
    };
    var shift = function () {
        if (head === null) {
            return null;
        }
        var oldHead = head;
        setHeadOnly(oldHead.next, true);
        return oldHead;
    };
    var pop = function () {
        if (tail === null) {
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
        if (head === null) {
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
        if (index <= 0) {
            unshift(value);
            return;
        }
        var tailIndex = count - 1;
        if (index >= tailIndex) {
            push(value);
            return;
        }
        if (shouldTraverseFromFront(index, tailIndex)) {
            traverseFromFront(index, value);
            return;
        }
        traverseFromBack(index, value);
    };
    var deleteAt = function (index) {
        if (head === null) {
            return null;
        }
        var tailIndex = count - 1;
        if (index > tailIndex) {
            return null;
        }
        if (index === tailIndex) {
            return pop();
        }
        if (index === 0) {
            return shift();
        }
        if (shouldTraverseFromFront(index, tailIndex)) {
            return traverseFromFront(index);
        }
        return traverseFromBack(index);
    };
    var setFirstElement = function (value) {
        head = tail = NodeFunc(value);
        count++;
    };
    var getCurrentItem = function () {
        if (itemIndex === null) {
            itemIndex = 0;
            item = headList();
        }
        return item;
    };
    var getCurrentItemIndex = function () {
        if (itemIndex === null) {
            return null;
        }
        return itemIndex;
    };
    var navigateToNextItem = function () {
        if (head === null) {
            return;
        }
        if (itemIndex === null) {
            itemIndex = -1;
        }
        if (itemIndex === (count - 1)) {
            return;
        }
        if (item === null) {
            item = headList();
            itemIndex++;
            return;
        }
        item = item.next;
        itemIndex++;
    };
    var navigateToPrevItem = function () {
        if (itemIndex === null || itemIndex === 0) {
            return;
        }
        item = item.previous;
        itemIndex--;
    };
    var setHeadOnly = function (value, isDelete) {
        if (isDelete === void 0) { isDelete = false; }
        if (isDelete) {
            head = value;
            head.previous = null;
            count--;
            return;
        }
        head = value;
        count++;
    };
    var setTailOnly = function (value, isDelete) {
        if (isDelete === void 0) { isDelete = false; }
        if (isDelete) {
            tail = value;
            tail.next = null;
            count--;
            return;
        }
        tail = value;
        count++;
    };
    var shouldTraverseFromFront = function (index, tailIndex) {
        return index < (tailIndex - index);
    };
    var traverseFromFront = function (index, value) {
        if (value === void 0) { value = null; }
        var currentNode = head;
        var currentIndex = 0;
        while (currentIndex <= index) {
            if (currentIndex === index) {
                if (value === null) {
                    return traverseFromFrontDelete(currentNode);
                }
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
    var traverseFromFrontDelete = function (oldNode) {
        oldNode.previous.next = oldNode.next;
        oldNode.next.previous = oldNode.previous;
        count--;
        return oldNode;
    };
    var traverseFromBack = function (index, value) {
        if (value === void 0) { value = null; }
        var currentNode = tail;
        var currentIndex = count - 1;
        while (currentIndex >= index) {
            if (currentIndex === index) {
                if (value === null) {
                    return traverseFromBackDelete(currentNode);
                }
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
    var traverseFromBackDelete = function (oldNode) {
        return traverseFromFrontDelete(oldNode);
    };
    /**
     * Extra functions
     * Not a part of the doublylinkedlist
     */
    var displayListFromHead = function () {
        itemIndex = item = null;
        var i = 0;
        var count = size();
        while (i < count) {
            console.log('VALUE: ' + getCurrentItem().value + ', INDEX: ' + getCurrentItemIndex() + '\n');
            navigateToNextItem();
            i++;
        }
    };
    var displayListFromTail = function () {
        var j = size() - 1;
        while (j >= 0) {
            console.log('VALUE: ' + getCurrentItem().value + ', INDEX: ' + getCurrentItemIndex() + '\n');
            navigateToPrevItem();
            j--;
        }
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
        insertAt: insertAt,
        getCurrentItem: getCurrentItem,
        getCurrentItemIndex: getCurrentItemIndex,
        navigateToNextItem: navigateToNextItem,
        navigateToPrevItem: navigateToPrevItem,
        deleteAt: deleteAt,
        displayListFromHead: displayListFromHead,
        displayListFromTail: displayListFromTail
    };
};
exports["default"] = DoublyLinkedListFunc;
