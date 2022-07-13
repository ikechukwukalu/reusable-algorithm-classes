/**
 * This code assumes that the gym, school and store
 * key values pairs are always given
 */

let blocks = [
    {
        gym: false,
        school: true,
        store: false
    },
    // {
    //     gym: true,
    //     school: true,
    //     store: true
    // },
    {
        gym: true,
        school: false,
        store: false
    },
    {
        gym: true,
        school: true,
        store: false
    },
    {
        gym: false,
        school: true,
        store: false
    },
    {
        gym: false,
        school: true,
        store: true
    },
    // {
    //     gym: true,
    //     school: true,
    //     store: true
    // }
];

const NODE = (value, index) => {
    return {
        gym: value.gym,
        school: value.school,
        store: value.store,
        index: index,
        prev: null,
        next: null
    }
}

const LINKEDLIST = () => {
    let head = null;
    let tail = null;
    let count = 0;

    const pushToTail = (value, index) => {
        if (!tail) {
            tail = head = NODE(value, index);
            count ++;

            return;
        }

        let oldTail = tail;
        tail = NODE(value, index);
        tail.prev = oldTail;
        oldTail.next = tail;

        count ++;
    }

    const filterBlocksWithBestDistance = () => {
        if (!head) {
            return {};
        }

        let blockObjects = {};
        let headNode = head;
        let i = 0;

        const closestIndex = (node, index) => {
            let closestGym = null;
            let closestSchool = null;
            let closestStore = null

            let currentNode = null;
            let nodeIndex = node.index;

            if (index > 0) {
                let i = index - 1;
                currentNode = node.prev;

                while (i >= 0) {
                    if (currentNode.gym) {
                        if (!closestGym) {
                            closestGym = {
                                distance: Math.abs(currentNode.index - nodeIndex),
                                block: currentNode.index
                            };
                        } else if (closestGym.distance > Math.abs(currentNode.index - nodeIndex)) {
                            closestGym = {
                                distance: Math.abs(currentNode.index - nodeIndex),
                                block: currentNode.index
                            };
                        }
                    }

                    if (currentNode.school) {
                        if (!closestSchool) {
                            closestSchool = {
                                distance: Math.abs(currentNode.index - nodeIndex),
                                block: currentNode.index
                            };
                        } else if (closestSchool.distance > Math.abs(currentNode.index - nodeIndex)) {
                            closestSchool = {
                                distance: Math.abs(currentNode.index - nodeIndex),
                                block: currentNode.index
                            };
                        }
                    }

                    if (currentNode.store) {
                        if (!closestStore) {
                            closestStore = {
                                distance: Math.abs(currentNode.index - nodeIndex),
                                block: currentNode.index
                            };
                        } else if (closestStore.distance > Math.abs(currentNode.index - nodeIndex)) {
                            closestStore = {
                                distance: Math.abs(currentNode.index - nodeIndex),
                                block: currentNode.index
                            };
                        }
                    }

                    if (currentNode.prev) {
                        currentNode = currentNode.prev;
                    }

                    i --;
                }
            }

            currentNode = node;

            while (currentNode !== null) {
                if (currentNode.gym) {
                    if (!closestGym) {
                        closestGym = {
                            distance: Math.abs(currentNode.index - nodeIndex),
                            block: currentNode.index
                        };
                    } else if (closestGym.distance > Math.abs(currentNode.index - nodeIndex)) {
                        closestGym = {
                            distance: Math.abs(currentNode.index - nodeIndex),
                            block: currentNode.index
                        };
                    }
                }

                if (currentNode.school) {
                    if (!closestSchool) {
                        closestSchool = {
                            distance: Math.abs(currentNode.index - nodeIndex),
                            block: currentNode.index
                        };
                    } else if (closestSchool.distance > Math.abs(currentNode.index - nodeIndex)) {
                        closestSchool = {
                            distance: Math.abs(currentNode.index - nodeIndex),
                            block: currentNode.index
                        };
                    }
                }

                if (currentNode.store) {
                    if (!closestStore) {
                        closestStore = {
                            distance: Math.abs(currentNode.index - nodeIndex),
                            block: currentNode.index
                        };
                    } else if (closestStore.distance > Math.abs(currentNode.index - nodeIndex)) {
                        closestStore = {
                            distance: Math.abs(currentNode.index - nodeIndex),
                            block: currentNode.index
                        };
                    }
                }

                currentNode = currentNode.next;
            }

            return {
                closestGym: closestGym,
                closestSchool: closestSchool,
                closestStore: closestStore,
                summedDistance: parseInt(closestGym.distance)
                                + parseInt(closestSchool.distance)
                                + parseInt(closestStore.distance)
            }
        }

        const blocksWithMinSummedDistance = () => {
            let newBlockObjects = {};
            let minDistance = 0;
            let ind = 0;

            for (let key in blockObjects) {
                let ele = blockObjects[key];

                if (ind === 0) {
                    newBlockObjects[ind] = ele;
                    minDistance = ele.summedDistance;
                }

                if (ele.summedDistance < minDistance) {
                    newBlockObjects = {}
                    newBlockObjects[ind] = ele;
                    minDistance = ele.summedDistance;
                } else if (ele.summedDistance === minDistance) {
                    newBlockObjects[ind] = ele;
                    minDistance = ele.summedDistance;
                }

                ind ++;
            }

            return newBlockObjects;
        }

        const bestBlocks = () => {
            let blocks = blocksWithMinSummedDistance();

            if (Object.keys(blocks).length === 1) {
                return blocks;
            }

            let bestDistance = {};
            let minDistance = null;

            for (let key in blocks) {
                let specificBlock = blocks[key];

                for (let key2 in specificBlock) {
                    if (specificBlock[key2].distance === undefined) {
                        continue;
                    }

                    if (minDistance === null
                        && specificBlock[key2].distance !== 0)
                    {
                        bestDistance = {};
                        minDistance = specificBlock[key2].distance;
                        bestDistance[key] = specificBlock;
                    }

                    if (minDistance > specificBlock[key2].distance
                        && specificBlock[key2].distance !== 0)
                    {
                        bestDistance = {};
                        minDistance = specificBlock[key2].distance;
                        bestDistance[key] = specificBlock;
                    }
                }
            }

            if (Object.keys(bestDistance).length === 0) {
                return blocks;
            }

            return bestDistance;
        }

        while (i < count) {
            blockObjects[i] = closestIndex(headNode, i);

            if (headNode.next) {
                headNode = headNode.next;
            }

            i ++;
        }

        return bestBlocks();
    }

    return {
        pushBlocks: pushToTail,
        findBlocks: filterBlocksWithBestDistance
    }
}

let list = LINKEDLIST();

blocks.map((obj, index) => list.pushBlocks(obj, index));

console.log(list.findBlocks());
