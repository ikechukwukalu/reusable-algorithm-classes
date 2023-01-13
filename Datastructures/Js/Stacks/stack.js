"use strict";
exports.__esModule = true;
var StackFunc = function () {
    var storage = {};
    var count = -1;
    var push = function (value) {
        count++;
        storage[count] = value;
    };
    var pop = function () {
        var item = storage[count];
        delete storage[count];
        count--;
        return item;
    };
    var peek = function () {
        if (count === -1) {
            return null;
        }
        return storage[count];
    };
    var size = function () {
        return count + 1;
    };
    var viewStack = function () {
        return storage;
    };
    return {
        push: push,
        pop: pop,
        peek: peek,
        size: size,
        viewStack: viewStack
    };
};
exports["default"] = StackFunc;
