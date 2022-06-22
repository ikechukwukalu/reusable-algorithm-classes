const NODE = (value) => {
    return {
        value: value,
        left: null,
        right: null
    }
}

const BST = (firstValue) => {
    let rootNode = NODE(firstValue);
    let sortedValues = [];

    const insert = (value) => {
        return traverse(rootNode, value);
    }

    const traverse = (root, value) => {
        if (root.value === value) {
            return;
        }

        if (value < root.value) {
            if (root.left === null) {
                let node = NODE(value);
                root.left = node;

                return;
            }

            traverse(root.left, value);
            return;
        }

        if (value > root.value) {
            if (root.right === null) {
                let node = NODE(value);
                root.right = node;

                return;
            }

            traverse(root.right, value);
            return;
        }
    }

    const depthFirstsortInOrder = () => {
        sortedValues = [];
        depthFirstsortInOrderTraverse(rootNode);

        return sortedValues;
    }

    const depthFirstsortInOrderTraverse = (root) => {
        if (root.left) {
            depthFirstsortInOrderTraverse(root.left);
        }

        sortedValues.push(root.value);

        if (root.right) {
            depthFirstsortInOrderTraverse(root.right);
        }
    }

    return {
        rootNode: rootNode,
        insert: insert,
        sortedValues: sortedValues,
        depthFirstsortInOrder: depthFirstsortInOrder,
    };
}
