async function register(){

let email = document.getElementById("email").value

let password = document.getElementById("password").value

const { data, error } = await supabase.auth.signUp({

email: email,
password: password

})

if(error){

alert(error.message)

}else{

let user = data.user

await supabase.from("users").insert({

id: user.id,
email: email

})

alert("Account created")

window.location = "login.html"

}

}
