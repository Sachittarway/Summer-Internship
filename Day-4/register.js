const button = document.getElementById("submit");

const uder = button.addEventListener("click",(event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/account",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then((response)=>response.json())
    .then((data)=> alert("Account Created Successfully!!"));
})