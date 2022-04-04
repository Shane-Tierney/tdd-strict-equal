const strictEqual = (a, b) => {
    if (typeof a != typeof b) {
        return false
    } else if (a != b) {
        return false
    } else {
        return true
    }
}

module.exports = strictEqual