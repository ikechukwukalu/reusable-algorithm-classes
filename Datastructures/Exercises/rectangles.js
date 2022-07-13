function numberOfRectangles(obj) {
    //(x1,y1), (x2,y1), (x1, y2), (x2, y2)
    let coordinates = new Set();
    let n = obj.length;
    let num = 0;

    for (let i = 0; i < n; i ++) {
        coordinates.add(`${obj[i]}`);
    }

    console.log(coordinates.values());

    for (let x = 0; x < n; x ++) {
        for (let y = 0; y < n; y ++) {
            if (obj[x][0] != obj[y][0]
                &&
                obj[x][1] != obj[y][1])
            {
                if (coordinates.has(`${obj[x][0]},${obj[y][1]}`)
                    &&
                    coordinates.has(`${obj[y][0]},${obj[x][1]}`))
                {
                    num ++;
                }
            }
        }
    }

    return num / 4;
}

let N = 7;
let ob = new Array(N).fill(0);

// Inserting the pairs
ob[0] = [0, 0];
ob[1] = [1, 0];
ob[2] = [1, 1];
ob[3] = [0, 1];
ob[4] = [2, 0];
ob[5] = [2, 1];
ob[6] = [11, 23];

console.log(numberOfRectangles(ob));