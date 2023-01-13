type NODE = {
    readonly value: string|number|Array<any>,
    previous: any,
    next: any
} | null;

export type DOUBLYLINKEDLIST = {
    readonly headList: Function,
    readonly tailList: Function,
    readonly size: Function,
    readonly unshift: Function,
    readonly push: Function,
    readonly shift: Function,
    readonly pop: Function,
    readonly search: Function,
    readonly insertAt: Function,
    readonly deleteAt: Function,
    readonly getCurrentItem: Function,
    readonly getCurrentItemIndex: Function,
    readonly navigateToNextItem: Function,
    readonly navigateToPrevItem: Function,
    readonly displayListFromHead: Function,
    readonly displayListFromTail: Function
}

const NodeFunc: Function = (value: string|number|Array<any>): NODE => {
    return {
        value: value,
        previous: null,
        next: null
    };
}

const DoublyLinkedListFunc: Function = (): DOUBLYLINKEDLIST => {
    let head: NODE = null;
    let tail: NODE = null;
    let count: number = 0;

    let item: NODE;
    let itemIndex: number|null = null;

    const unshift: Function = (value: string|number|Array<any>) => {
        if (head === null) {
            setFirstElement(value);
            return;
        }

        let oldHead = head;
        setHeadOnly(NodeFunc(value));
        head.next = oldHead;
        oldHead.previous = head;
    }

    const push: Function = (value: string|number|Array<any>) => {
        if (tail === null) {
            setFirstElement(value);
            return;
        }

        let oldTail = tail;
        setTailOnly(NodeFunc(value));
        tail.previous = oldTail;
        oldTail.next = tail;
    }

    const shift: Function = (): NODE => {
        if (head === null) {
            return null;
        }

        let oldHead = head;
        setHeadOnly(oldHead.next, true);

        return oldHead;
    }

    const pop: Function = () => {
        if (tail === null) {
            return null;
        }

        let oldTail = tail;
        setTailOnly(oldTail.previous, true);

        return oldTail;
    }

    const size: Function = (): number => count;

    const headList: Function = (): NODE => head;

    const tailList: Function = (): NODE => tail;

    const search: Function = (value: string|number|Array<any>): NODE => {
        if (head === null) {
            return null;
        }

        let currentNode = head;
        let i = 0;

        while (i < count) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
            i ++;
        }

        return null;
    }

    const insertAt: Function = (value: string|number|Array<any>, index: number): void => {
        if (index <= 0) {
            unshift(value);
            return;
        }

        let tailIndex: number = count - 1;
        if (index >= tailIndex) {
            push(value);
            return;
        }

        if (shouldTraverseFromFront(index, tailIndex)) {
            traverseFromFront(index, value);
            return;
        }

        traverseFromBack(index, value);
    }

    const deleteAt: Function = (index: number): NODE => {
        if (head === null) {
            return null;
        }

        let tailIndex: number = count - 1;
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
    }

    const setFirstElement: Function = (value: string|number|Array<any>): void => {
        head = tail = NodeFunc(value);
        count ++;
    }

    const getCurrentItem: Function = (): NODE => {
        if (itemIndex === null) {
            itemIndex = 0;
            item = headList();
        }

        return item;
    }

    const getCurrentItemIndex: Function = (): number|null => {
        if (itemIndex === null) {
            return null;
        }

        return itemIndex;
    }

    const navigateToNextItem: Function = (): void => {
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
            itemIndex ++;

            return;
        }

        item = item.next;
        itemIndex ++;
    }

    const navigateToPrevItem: Function = (): void => {
        if (itemIndex === null || itemIndex === 0) {
            return;
        }

        item = item.previous;
        itemIndex --;
    }

    const setHeadOnly: Function = (value: NODE, isDelete: boolean = false): void => {
        if (isDelete) {
            head = value;
            head.previous = null;

            count --;

            return;
        }

        head = value;
        count ++;
    }

    const setTailOnly: Function = (value: NODE, isDelete: boolean = false): void => {
        if (isDelete) {
            tail = value;
            tail.next = null;
            count --;

            return;
        }

        tail = value;
        count ++;
    }

    const shouldTraverseFromFront: Function = (index: number, tailIndex: number): boolean => {
        return index < (tailIndex - index);
    }

    const traverseFromFront: Function = (index: number, value: string|number|Array<any>|NODE = null): NODE => {
        let currentNode = head;
        let currentIndex = 0;

        while (currentIndex <= index) {
            if (currentIndex === index) {
                if (value === null) {
                    return traverseFromFrontDelete(currentNode);
                }

                traverseFromFrontInsert(value, currentNode);
                return null;
            }

            currentNode = currentNode.next;
            currentIndex ++;
        }

        return null;
    }

    const traverseFromFrontInsert: Function = (value: string|number|Array<any>, nextNode: NODE): void => {
        let newNode = NodeFunc(value);
        nextNode.previous.next = newNode;
        newNode.previous = nextNode.previous;
        newNode.next = nextNode;
        nextNode.previous = newNode;

        count ++;
    }

    const traverseFromFrontDelete: Function = (oldNode: NODE): NODE => {
        oldNode.previous.next = oldNode.next;
        oldNode.next.previous = oldNode.previous;
        count --;

        return oldNode;
    }

    const traverseFromBack: Function = (index: number, value: string|number|Array<any>|NODE = null): NODE => {
        let currentNode = tail;
        let currentIndex = count - 1;

        while (currentIndex >= index) {
            if (currentIndex === index) {
                if (value === null) {
                    return traverseFromBackDelete(currentNode);
                }

                traverseFromBackInsert(value, currentNode);
                return null;
            }

            currentNode = currentNode.previous;
            currentIndex --;
        }

        return null;
    }

    const traverseFromBackInsert: Function = (value: string|number|Array<any>, prevNode: NODE): void => {
        let newNode = NodeFunc(value);
        prevNode.next.previous = newNode;
        newNode.previous = prevNode;
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        count ++;
    }

    const traverseFromBackDelete: Function = (oldNode: NODE): NODE => {
        return traverseFromFrontDelete(oldNode);
    }

    /**
     * Extra functions
     * Not a part of the doublylinkedlist
     */

    const displayListFromHead: Function = (): void => {
        itemIndex = item = null;

        let i = 0;
        let count = size();

        while (i < count) {
            console.log('VALUE: ' + getCurrentItem().value + ', INDEX: ' + getCurrentItemIndex() + '\n');
            navigateToNextItem();
            i ++;
        }
    }

    const displayListFromTail: Function = (): void => {
        let j = size() - 1;

        while (j >= 0) {
            console.log('VALUE: ' + getCurrentItem().value + ', INDEX: ' + getCurrentItemIndex() + '\n');
            navigateToPrevItem();
            j --;
        }
    }

    /**
     * End extra functions
     */

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
        deleteAt: deleteAt,
        getCurrentItem: getCurrentItem,
        getCurrentItemIndex: getCurrentItemIndex,
        navigateToNextItem: navigateToNextItem,
        navigateToPrevItem: navigateToPrevItem,
        displayListFromHead: displayListFromHead,
        displayListFromTail: displayListFromTail
    }
}

export default DoublyLinkedListFunc;