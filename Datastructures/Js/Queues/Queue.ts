export type QUEUE = {
    push: Function,
    shift: Function,
    peek: Function,
    size: Function,
    viewQueue: Function
}

const QueueFunc: Function = (): QUEUE => {
    let storage: object = {};
    let count: number = -1
    let index: number = 0;

    const push: Function = (value: string|number|Array<any>): void => {
        count ++;

        storage[count] = value;
    }

    const shift: Function = (): string|number|Array<any> => {
        let item = storage[index];

        delete storage[index];
        count --;
        index ++;

        return item;
    }

    const peek: Function = (): string|number|Array<any>|null => {
        if (count === -1) {
            return null
        }

        return storage[index];
    }

    const size: Function = (): number => {
        return count + 1;
    }

    const viewQueue: Function = (): object => {
        return storage;
    }

    return {
        push: push,
        shift: shift,
        peek: peek,
        size: size,
        viewQueue: viewQueue,
    }
}

export default QueueFunc;