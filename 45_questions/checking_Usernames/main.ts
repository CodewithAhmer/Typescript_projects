let currentUsers:string[]=["Ahmer","Zeeshan","Barira","Usman","Amir"]
let newUsers:string[]=["Hooria","Anabia","Ahmer","Zeeshan","Umar"]

newUsers.forEach(new_one_user => {
    let our_Condition = currentUsers.some(current_one_user => current_one_user.toLocaleLowerCase()=== new_one_user.toLocaleLowerCase())
    if(our_Condition){
console.log(`Sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`This username ${new_one_user} is available!`)
    }
})