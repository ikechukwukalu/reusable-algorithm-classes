var NodeFunc = function (value) {
    return {
        value: value,
        left: null,
        right: null
    };
};
var BinaryTreeFunc = function (firstValue) {
    var rootNode = NodeFunc(firstValue);
    var size = 1;
    var values = [];
    var insert = function (value) {
        traverse(rootNode, value);
        return;
    };
    var min = function () { return treeObservations('left'); };
    var max = function () { return treeObservations('right'); };
    //left, root, right.
    var depthFirstSortInOrder = function () {
        values = [];
        depthFirstSortInOrderTraverse(rootNode);
        return values;
    };
    //root, left, right
    var depthFirstSortPreOrder = function () {
        values = [];
        depthFirstSortPreOrderTraverse(rootNode);
        return values;
    };
    //left, right, root
    var depthFirstSortPostOrder = function () {
        values = [];
        depthFirstSortPostOrderTraverse(rootNode);
        return values;
    };
    var breadthFirstSort = function () {
        values = [];
        var queue = [rootNode];
        while (queue.length > 0) {
            var currentNode = queue.shift();
            values.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return values;
    };
    var traverse = function (root, value) {
        if (root.value === value) {
            return;
        }
        if (value < root.value) {
            if (root.left === null) {
                var node = NodeFunc(value);
                root.left = node;
                size++;
                return;
            }
            traverse(root.left, value);
            return;
        }
        if (value > root.value) {
            if (root.right === null) {
                var node = NodeFunc(value);
                root.right = node;
                size++;
                return;
            }
            traverse(root.right, value);
            return;
        }
    };
    var depthFirstSortInOrderTraverse = function (root) {
        if (root.left) {
            depthFirstSortInOrderTraverse(root.left);
        }
        values.push(root.value);
        if (root.right) {
            depthFirstSortInOrderTraverse(root.right);
        }
    };
    var depthFirstSortPreOrderTraverse = function (root) {
        values.push(root.value);
        if (root.left) {
            depthFirstSortPreOrderTraverse(root.left);
        }
        if (root.right) {
            depthFirstSortPreOrderTraverse(root.right);
        }
    };
    var depthFirstSortPostOrderTraverse = function (root) {
        if (root.left) {
            depthFirstSortPostOrderTraverse(root.left);
        }
        if (root.right) {
            depthFirstSortPostOrderTraverse(root.right);
        }
        values.push(root.value);
    };
    var treeObservations = function (leg) {
        var currentNode = rootNode;
        while (currentNode[leg]) {
            currentNode = currentNode[leg];
        }
        return currentNode;
    };
    return {
        root: rootNode,
        size: size,
        insert: insert,
        min: min,
        max: max,
        depthFirstSortInOrder: depthFirstSortInOrder,
        depthFirstSortPreOrder: depthFirstSortPreOrder,
        depthFirstSortPostOrder: depthFirstSortPostOrder,
        breadthFirstSort: breadthFirstSort
    };
};
var tree = BinaryTreeFunc(15);
tree.insert(3);
tree.insert(36);
tree.insert(2);
tree.insert(12);
tree.insert(28);
tree.insert(39);
process.stdout.write('\nInitial Tree In Object Format\n');
console.log(tree);
process.stdout.write('\nShow The Min Branch In Object Format\n');
console.log(tree.min());
process.stdout.write('\nShow The Max Branch In Object Format\n');
console.log(tree.max());
process.stdout.write('\nDepth First Sort In Order\n');
console.log(tree.depthFirstSortInOrder());
process.stdout.write('\nDepth First Sort Pre-order\n');
console.log(tree.depthFirstSortPreOrder());
process.stdout.write('\nDepth First Sort Post-order\n');
console.log(tree.depthFirstSortPostOrder());
process.stdout.write('\Breadth First Sort\n');
console.log(tree.breadthFirstSort());
