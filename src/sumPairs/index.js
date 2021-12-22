/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {

    let numbers = new Map();
    let solution = new Map();

    for (let e of A) {
        numbers.set(e, e)
    }

    for (let e of A) {
        let difference = N - e;

        //make sure N doesn't create a pair of duplicate numbers by being even
        if (difference !== e) {
            if (numbers.has(difference)) {
                solution.set(Math.min(e, difference), Math.max(e,difference))
            }
        }
    }

    return Array.from(solution)
}

module.exports = sumPairs;
