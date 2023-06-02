const button = document.getElementById("submit");

button.addEventListener("click",()=>{
    const image = document.getElementById("image").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch("http://localhost:8080/food",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            image: image,
            title: title,
            description : description
        })
    }).then((response)=>response.json())
    .then((data)=>alert("Item Added Successfully!!"));
})

const back = document.getElementById("back");
back.addEventListener("click",()=>{
    window.location.href="./hotel.html"
})