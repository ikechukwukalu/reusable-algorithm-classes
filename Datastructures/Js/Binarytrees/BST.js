"use strict";
exports.__esModule = true;
var NodeFunc = function (value) {
    return {
        value: value,
        left: null,
        right: null
    };
};
var BinaryTreeFunc = function (firstValue) {
    var rootNode = NodeFunc(firstValue);
    var count = 1;
    var values = [];
    var insert = function (value) {
        traverse(rootNode, value);
        return;
    };
    var min = function () { return treeObservations('left'); };
    var max = function () { return treeObservations('right'); };
    var size = function () { return count; };
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
                count++;
                return;
            }
            traverse(root.left, value);
            return;
        }
        if (value > root.value) {
            if (root.right === null) {
                var node = NodeFunc(value);
                root.right = node;
                count++;
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
exports["default"] = BinaryTreeFunc;
