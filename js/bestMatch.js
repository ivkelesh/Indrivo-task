const K = 22
const ARR = [10, 15, 18, 24, 38]

const bestMatch = findBestMatch(K, ARR)

console.log(bestMatch)

function findBestMatch(num, array) {
    var i = 0;
    var minDiff = 1000;
    var ans;
    for (i in array) {
        var m = Math.abs(num - array[i]);
        if (m < minDiff) {
            minDiff = m;
            ans = array[i];
        }
    }
    return ans;
}