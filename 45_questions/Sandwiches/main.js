function makeSandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwitch with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy Sandwitch");
}
makeSandwitch("chicken", "cheese", "mayo", "egg");
makeSandwitch("bread", "butter");
makeSandwitch("bread", "butter", "egg", "mayo", "cheese", "letuce", "chicken");
