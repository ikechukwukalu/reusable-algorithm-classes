type NODE = {
    readonly value: string|number|Array<any>,
    left: any,
    right: any
}

export type BINARYTREE = {
    readonly root: NODE,
    readonly size: Function,
    readonly insert: Function,
    readonly min: Function,
    readonly max: Function,
    readonly depthFirstSortInOrder: Function,
    readonly depthFirstSortPreOrder: Function,
    readonly depthFirstSortPostOrder: Function,
    readonly breadthFirstSort: Function
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
    let count: number = 1;
    let values: Array<any> = [];

    const insert: Function = (value: string|number|Array<any>): void => {
        traverse(rootNode, value);
        return;
    }

    const min: Function = (): NODE => treeObservations('left');

    const max: Function = (): NODE => treeObservations('right');

    const size: Function = (): number => count;

    //left, root, right.
    const depthFirstSortInOrder: Function = (): Array<any> => {
        values = [];
        depthFirstSortInOrderTraverse(rootNode);

        return values;
    }

    //root, left, right
    const depthFirstSortPreOrder: Function = (): Array<any> => {
        values = [];
        depthFirstSortPreOrderTraverse(rootNode);

        return values;
    }

    //left, right, root
    const depthFirstSortPostOrder: Function = (): Array<any> => {
        values = [];
        depthFirstSortPostOrderTraverse(rootNode);

        return values;
    }

    const breadthFirstSort: Function = (): Array<any> => {
        values = [];
        let queue: Array<NODE> = [rootNode];

        while (queue.length > 0) {
            let currentNode: any = queue.shift();
            values.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return values;
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

        values.push(root.value);

        if (root.right) {
            depthFirstSortInOrderTraverse(root.right);
        }
    }

    const depthFirstSortPreOrderTraverse: Function = (root: NODE): void => {
        values.push(root.value);

        if (root.left) {
            depthFirstSortPreOrderTraverse(root.left);
        }

        if (root.right) {
            depthFirstSortPreOrderTraverse(root.right);
        }
    }

    const depthFirstSortPostOrderTraverse: Function = (root: NODE): void => {
        if (root.left) {
            depthFirstSortPostOrderTraverse(root.left);
        }

        if (root.right) {
            depthFirstSortPostOrderTraverse(root.right);
        }

        values.push(root.value);
    }

    const treeObservations: Function = (leg: string): NODE => {
        let currentNode: NODE = rootNode;

        while (currentNode[leg]) {
            currentNode = currentNode[leg];
        }

        return currentNode;
    }

    return {
        root: rootNode,
        size: size,
        insert: insert,
        min: min,
        max: max,
        depthFirstSortInOrder: depthFirstSortInOrder,
        depthFirstSortPreOrder: depthFirstSortPreOrder,
        depthFirstSortPostOrder: depthFirstSortPostOrder,
        breadthFirstSort: breadthFirstSort,
    };
}

export default BinaryTreeFunc;