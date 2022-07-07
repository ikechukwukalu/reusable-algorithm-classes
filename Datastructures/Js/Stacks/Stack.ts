export type STACK = {
    push: Function,
    pop: Function,
    peek: Function,
    size: Function,
    viewStack: Function
}

const StackFunc: Function = (): STACK => {
    let storage: object = {};
    let count: number = -1

    const push: Function = (value: string|number|Array<any>): void => {
        count ++;

        storage[count] = value;
    }

    const pop: Function = (): string|number|Array<any> => {
        let item = storage[count];

        delete storage[count];
        count --;

        return item;
    }

    const peek: Function = (): string|number|Array<any>|null => {
        if (count === -1) {
            return null
        }

        return storage[count];
    }

    const size: Function = (): number => {
        return count + 1;
    }

    const viewStack: Function = (): object => {
        return storage;
    }

    return {
        push: push,
        pop: pop,
        peek: peek,
        size: size,
        viewStack: viewStack,
    }
}

export default StackFunc;