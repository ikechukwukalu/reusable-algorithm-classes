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
    readonly getCurrentItem: Function,
    readonly getCurrentItemIndex: Function,
    readonly navigateToNextItem: Function,
    readonly navigateToPrevItem: Function
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

    let item: NODE = null;
    let itemIndex: number|null;

    const unshift: Function = (value: string|number|Array<any>) => {
        if (!head) {
            setFirstElement(value);
            return;
        }

        let oldHead = head;
        setHeadOnly(value);
        head.next = oldHead;
        oldHead.previous = head;
    }

    const push: Function = (value: string|number|Array<any>) => {
        if (!tail) {
            setFirstElement(value);
            return;
        }

        let oldTail = tail;
        setTailOnly(value);
        tail.previous = oldTail;
        oldTail.next = tail;
    }

    const shift: Function = (): NODE => {
        if (!head) {
            return null;
        }

        let oldHead = head;
        setHeadOnly(oldHead.next, true);

        return oldHead;
    }

    const pop: Function = () => {
        if (!tail) {
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
        if (!head) {
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
        if (!head) {
            setFirstElement(value);
            return;
        }

        if (index === 0) {
            unshift(value);
            return;
        }

        let tailIndex: number = count - 1;
        if (index === tailIndex) {
            push(value);
            return;
        }

        if (shouldTraverseFromFront(index, tailIndex)) {
            traverseFromFront(index, value);
            return;
        }

        traverseFromBack(index, value);
    }

    const setFirstElement: Function = (value: string|number|Array<any>): void => {
        head = tail = NodeFunc(value);
        count ++;
    }

    const getCurrentItem: Function = (): NODE => {
        if (!itemIndex) {
            itemIndex = 0;
        }

        if (itemIndex === 0) {
            item = head;
        }

        return item;
    }

    const getCurrentItemIndex: Function = (): number|null => {
        if (!itemIndex) {
            return null;
        }

        return itemIndex;
    }

    const navigateToNextItem: Function = (): void => {
        if (!head) {
            return;
        }

        if (!itemIndex) {
            itemIndex = -1;
        }

        if (itemIndex === (count - 1)) {
            return;
        }

        if (!item) {
            item = head;
            itemIndex ++;

            return;
        }

        item = item.next;
        itemIndex ++;
    }

    const navigateToPrevItem: Function = (): void => {
        if (!itemIndex || itemIndex === 0) {
            return;
        }

        item = item.previous;
        itemIndex --;
    }

    const setHeadOnly: Function = (value: string|number|Array<any>|NODE, isNode: boolean = false): void => {
        if (isNode) {
            head = value;
            head.previous = null;
            count --;

            return;
        }

        head = NodeFunc(value);
        count ++;
    }

    const setTailOnly: Function = (value: string|number|Array<any>|NODE, isNode: boolean = false): void => {
        if (isNode) {
            tail = value;
            tail.next = null;
            count --;

            return;
        }

        tail = NodeFunc(value);
        count ++;
    }

    const shouldTraverseFromFront: Function = (index: number, tailIndex: number): boolean => {
        return index < (tailIndex - index);
    }

    const traverseFromFront: Function = (index: number, value: string|number|Array<any>|NODE): NODE => {
        let currentNode = head;
        let currentIndex = 0;

        while (currentIndex <= index) {
            if (currentIndex === index) {

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

    const traverseFromBack: Function = (index: number, value: string|number|Array<any>|NODE): NODE => {
        let currentNode = tail;
        let currentIndex = count - 1;

        while (currentIndex >= index) {
            if (currentIndex === index) {

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
        navigateToPrevItem: navigateToPrevItem
    }
}

export default DoublyLinkedListFunc;