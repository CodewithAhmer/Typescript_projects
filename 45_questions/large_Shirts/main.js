function make_shirt(Size, printMessage) {
    if (Size === void 0) { Size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("Creating a ".concat(Size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "CodewithAhmer");
