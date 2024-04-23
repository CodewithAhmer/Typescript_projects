let numbers = [1,2,3,4,5,6,7,8,9]
for(let oneNumber of numbers){
    let ordinal_Ending:string;
    if(oneNumber === 1){
        ordinal_Ending ="st"
    }else if(oneNumber === 2){
        ordinal_Ending ="nd"
    }else if(oneNumber === 3){
        ordinal_Ending ="rd"
   }else{
    ordinal_Ending ="th"
   }
   console.log(`${oneNumber}${ordinal_Ending}`)
}