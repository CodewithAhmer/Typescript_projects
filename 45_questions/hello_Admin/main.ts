let usernames:string[] = ["Mahad","Zeeshan","Ahmer","Admin","Usman"]

usernames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneUser}, Thankyou for logging in again!`)
    }
})