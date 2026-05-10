const sumAll = function(num1, num2) {
    let numBig = 0
    let numSmall = 0

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || typeof(num1)!="number"|| typeof(num2)!="number"){
        return 'ERROR'
    }

    if (num1 > num2){
        numBig = num1
        numSmall = num2
    } else {
        numBig = num2
        numSmall = num1
    }

    let sumNums = numSmall
    for (i=0; i<(numBig-numSmall);i++){ // 4 - 2 = 2
        sumNums += (numSmall + i+1)
    }

    return sumNums

};


// Do not edit below this line
module.exports = sumAll;
