let email = document.getElementById('email')
let password = document.getElementById('password')

function generateToken(){
    return Math.random(0,100000).toString();
}

document.getElementById("login").addEventListener("click",() =>{
   if(email.value == "" || password.value == ""){
     // 
   }
   else{
    let users = JSON.parse(localStorage.getItem("users") ?? "[]");
    console.log(users);
    if(users.length > 0) {
      let user = users.filter((user) => user.email == email.value);
      if(user.length > 0){
        let obj = user[0];
        if(obj.password  == password.value){
          localStorage.setItem("currUser" , JSON.stringify({
             email: email.value,
             password: password.value,
             token: generateToken()

          }))
        }
      }
      else{
        
      }
    }
   }
})