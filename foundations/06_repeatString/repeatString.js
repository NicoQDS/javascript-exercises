const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }

    let stringToRepeat = ""
    for (let i=0; i<num; i++) {
        stringToRepeat += string
    }
    return stringToRepeat
};

// Do not edit below this line
module.exports = repeatString;
