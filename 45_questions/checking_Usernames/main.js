var currentUsers = ["Ahmer", "Zeeshan", "Barira", "Usman", "Amir"];
var newUsers = ["Hooria", "Anabia", "Ahmer", "Zeeshan", "Umar"];
newUsers.forEach(function (new_one_user) {
    var our_Condition = currentUsers.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_Condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available!"));
    }
});
