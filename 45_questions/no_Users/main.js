var usernames = ["Mahad", "Zeeshan", "Ahmer", "Admin", "Usman"];
usernames = [];
if (usernames.length === 0) {
    console.log("You array is empty we need to find some users!");
}
else {
    usernames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thankyou for logging in again!"));
        }
    });
}
