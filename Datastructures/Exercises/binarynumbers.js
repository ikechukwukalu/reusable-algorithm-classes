let n = 10;

const generateBinaryNumbers = (n) => {
    if (n === 0) {
        return [];
    }

    let binaryNumbers = [];

    const getBinary = (str, num) => {
        if (num === 1) {
            str += 1;

            return str.split("").reverse().join("");
        }

        str += num % 2;

        return getBinary(str, Math.floor(num / 2));
    }

    for (let i = 1; i <= 10; i ++) {
        binaryNumbers.push(getBinary("", i));
    }

    return binaryNumbers;
}

console.log(generateBinaryNumbers(n));