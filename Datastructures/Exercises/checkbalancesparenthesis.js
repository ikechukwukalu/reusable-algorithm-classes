const exp = "{[({})]}";

const isBalanced = (str) => {
    if (str.length === 0) {
        return false;
    }

    let str_ary = str.split("");
    let size = str_ary.length;
    let n = (size / 2) - 1;

    if (size % 2 !== 0) {
        return false;
    }

    let parenthesis = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    for (let index = 0; index <= n; index ++) {
        let closingIndex = (size - 1) - index;
        let key = str_ary[index];
        // console.log(key, str_ary[closingIndex]);

        if (!(key in parenthesis)) {
            return false;
        }

        if (parenthesis[key] !== str_ary[closingIndex]) {
            return false;
        }
    }

    return true;
}

console.log(isBalanced(exp));