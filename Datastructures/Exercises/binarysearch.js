let ary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
    81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
];

const returnedObj = (array, index = null, value = null) => {
    return {array: array, index: index, value: value};
}

const binarySearch = (ary, value) => {
    let left = 0;
    let right = ary.length - 1;
    let middle = Math.floor((left + right) / 2);

    if (ary.length <= 0) {
        return returnedObj(ary);
    }

    if (ary[left] === value) {
        return returnedObj(ary, left, ary[left]);
    }

    if (ary[right] === value) {
        return returnedObj(ary, right, ary[right]);
    }

    if (ary[middle] === value) {
        return returnedObj(ary, middle, ary[middle]);
    }

    if (ary[middle] < value) {
        let newArray = ary.slice(middle + 1);
        return binarySearch(newArray, value);
    }

    if (ary[middle] > value) {
        let newArray = ary.slice(0, middle);
        return binarySearch(newArray, value);
    }
}

console.log(binarySearch(ary, 43));