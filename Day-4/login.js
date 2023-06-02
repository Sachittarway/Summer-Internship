const button = document.getElementById("login");
button.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("hello")
    console.log(email);
    fetch("http://localhost:8080/account",{
        method: "GET"
    }).then((response)=>response.json())
    .then((data)=>{ 
        const user = data.find((ele)=> ele.email === email && ele.password === password);
        console.log(user);
        if(!user){
            alert("Please enter valid email id and password");
        }
        else{
            window.location.href = "./hotel.html"
        }
    });
})