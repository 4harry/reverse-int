module.exports = function reverse (n) {
// const reverse = (n) => {
    let i = 0;
    let res = '';
    n = String(n);
    while (i < n.length) {
        res = `${n[i]}${res}`;
        i++;
    }
    return parseInt(res);
}

// console.log(reverse(-321));