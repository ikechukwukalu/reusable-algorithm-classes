type NODE = {
    readonly value: string|number|Array<any>,
    left: any,
    right: any
}

type BINARYTREE = {
    readonly rootNode: NODE,
    readonly count: number,
    readonly sortedValues: Array<number>,
    readonly insert: Function,
    readonly depthFirstSortInOrder: Function,
    readonly depthFirstSortPreOrder: Function,
    readonly depthFirstSortPostOrder: Function,
}

const NodeFunc: Function = (value: string|number|Array<any>): NODE => {
    return {
        value: value,
        left: null,
        right: null
    }
}

const BinaryTreeFunc: Function = (firstValue: string|number|Array<any>): BINARYTREE => {
    let rootNode: NODE = NodeFunc(firstValue);
    let count: number = 0;
    let sortedValues: Array<any> = [];

    const insert: Function = (value: string|number|Array<any>): void => {
        traverse(rootNode, value);
        return;
    }

    const depthFirstSortInOrder: Function = (): Array<number> => {
        sortedValues = [];
        depthFirstSortInOrderTraverse(rootNode);

        return sortedValues;
    }

    const depthFirstSortPreOrder: Function = (): Array<number> => {
        sortedValues = [];
        depthFirstSortPreOrderTraverse(rootNode);

        return sortedValues;
    }

    const depthFirstSortPostOrder: Function = (): Array<number> => {
        sortedValues = [];
        depthFirstSortPostOrderTraverse(rootNode);

        return sortedValues;
    }

    const traverse: Function = (root: NODE, value: string|number|Array<any>): void => {
        if (root.value === value) {
            return;
        }

        if (value < root.value) {
            if (root.left === null) {
                let node = NodeFunc(value);
                root.left = node;
                count ++;

                return;
            }

            traverse(root.left, value);
            return;
        }

        if (value > root.value) {
            if (root.right === null) {
                let node = NodeFunc(value);
                root.right = node;
                count ++;

                return;
            }

            traverse(root.right, value);
            return;
        }
    }

    const depthFirstSortInOrderTraverse: Function = (root: NODE): void => {
        if (root.left) {
            depthFirstSortInOrderTraverse(root.left);
        }

        sortedValues.push(root.value);

        if (root.right) {
            depthFirstSortInOrderTraverse(root.right);
        }
    }

    const depthFirstSortPreOrderTraverse: Function = (root: NODE): void => {
        if (root.left) {
            depthFirstSortPreOrderTraverse(root.left);
        }

        sortedValues.push(root.value);

        if (root.right) {
            depthFirstSortPreOrderTraverse(root.right);
        }
    }

    const depthFirstSortPostOrderTraverse: Function = (root: NODE): void => {
        if (root.left) {
            depthFirstSortPostOrderTraverse(root.left);
        }

        sortedValues.push(root.value);

        if (root.right) {
            depthFirstSortPostOrderTraverse(root.right);
        }
    }

    return {
        rootNode: rootNode,
        count: count,
        sortedValues: sortedValues,
        insert: insert,
        depthFirstSortInOrder: depthFirstSortInOrder,
        depthFirstSortPreOrder: depthFirstSortPreOrder,
        depthFirstSortPostOrder: depthFirstSortPostOrder,
    };
}
