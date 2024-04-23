var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinal_Ending = void 0;
    if (oneNumber === 1) {
        ordinal_Ending = "st";
    }
    else if (oneNumber === 2) {
        ordinal_Ending = "nd";
    }
    else if (oneNumber === 3) {
        ordinal_Ending = "rd";
    }
    else {
        ordinal_Ending = "th";
    }
    console.log("".concat(oneNumber).concat(ordinal_Ending));
}
