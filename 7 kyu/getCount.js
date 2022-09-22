const vocales = ["a", "e", "i", "o", "u"]

function getCount(str) {
    let count = 0;

    for (let letra of str.toLowerCase()) {
        if (vocales.includes(letra)) {
            count++;
        }
    }
    return count
}
module.exports = getCount;