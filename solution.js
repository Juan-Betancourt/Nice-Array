function isNice(arr) {
    const verifyArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
            verifyArr.push('true');
        } else { verifyArr.push('false'); }
    }
    if (verifyArr.includes('false') || verifyArr.length === 0) {
        return false;
    } else return true;
};