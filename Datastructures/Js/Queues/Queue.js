"use strict";
exports.__esModule = true;
var QueueFunc = function () {
    var storage = {};
    var count = -1;
    var index = 0;
    var push = function (value) {
        count++;
        storage[count] = value;
    };
    var shift = function () {
        var item = storage[index];
        delete storage[index];
        count--;
        index++;
        return item;
    };
    var peek = function () {
        if (count === -1) {
            return null;
        }
        return storage[index];
    };
    var size = function () {
        return count + 1;
    };
    var viewQueue = function () {
        return storage;
    };
    return {
        push: push,
        shift: shift,
        peek: peek,
        size: size,
        viewQueue: viewQueue
    };
};
exports["default"] = QueueFunc;
