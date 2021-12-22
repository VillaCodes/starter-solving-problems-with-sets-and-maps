function intersection(a, b) {

    const aMap = new Map();

    const results = new Set();

    //iterate over each element below and add it to the map

    for (let e of a) {
        aMap.set(e, e)
    }

    //check if map includes an element of b, and add it to set if so

    for (let e of b) {
        if (aMap.has(e)){
            results.add(e)
        }
    }

    return [...results] //Array.from(results)
}

module.exports = intersection;
