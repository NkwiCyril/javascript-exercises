const repeatString = function(string, times) {
    let newString = "";
    if (times == 0) {
        return ""
    } else if (times < 0) {
        return "ERROR"
    } else 
    for (let i = 0; i < times; i++) {
         newString+=string;
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
