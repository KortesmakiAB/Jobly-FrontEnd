function addCommas(num) {
    
    let strNum = String(num);

    let decimalNums = '';
    let dotIdx = strNum.indexOf('.');
    if (dotIdx !== -1) {
        decimalNums = strNum.slice(dotIdx);
        strNum = strNum.slice(0, dotIdx)
    }

    if (strNum.length <= 3) return `${strNum}${decimalNums}`;

    let addedCommas = '';
    let counter = strNum.length % 3 === 0 ? 3 : strNum.length % 3;    // counts down

    for (let char of strNum) {
        if (!counter) {
            addedCommas += ',';
            counter = 3;
        }
        addedCommas += char;

        counter--;
    }

    return `${addedCommas}${decimalNums}`;

}

export default addCommas;