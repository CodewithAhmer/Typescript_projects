function makeSandwitch(...items:string[]){
    console.log("\nMaking a sandwitch with the following items: \n")
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy Sandwitch");
}

makeSandwitch("chicken","cheese","mayo","egg");
makeSandwitch("bread","butter");
makeSandwitch("bread","butter","egg","mayo","cheese","letuce","chicken");