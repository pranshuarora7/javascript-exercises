const repeatString = function (string, num) {
    let a = string;
    let i = 0;
    if (num > 0) {
        for (i = 0; i < num - 1; i++) {
            a += string;
        }
        return a;
    }
    else if (num < 0) {
        return "ERROR";
    }
    else {
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;
