var usernames = ["Mahad", "Zeeshan", "Ahmer", "Admin", "Usman"];
usernames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thankyou for logging in again!"));
    }
});
