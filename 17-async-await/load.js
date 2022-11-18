function getUser(name){
    return query(name);
} 

async function loadUser(users){
    for (let i =0; i < users.length; i++){
        let user = await query(users[i]);
        let progress = (i+1)/users.length * 100;
        loading.style.width = progress + "%";
        loading.innerHTML = Math.round(progress) + "%";
        console.log(user);
    }
}

loadUser(["Lise", "Lott", "Zafar", "Anna", "Mike", "Jon", "Kelly"]);