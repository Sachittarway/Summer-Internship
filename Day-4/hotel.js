
const movie = document.getElementById("food");

fetch("http://localhost:8080/food",{
    method: "GET"
}).then((response)=>response.json())
.then((data)=>{
    console.log(data);
    data.forEach((ele)=>{
        const div = document.createElement("div");
        const image = document.createElement("img");
        image.src=ele.image;
        const title = document.createElement("h3");
        title.innerText=ele.title;
        const button1 = document.createElement("button");
        button1.innerText="Show Details";
        const button2 = document.createElement("button");
        button2.innerText="Hide Details";
        const description = document.createElement("div");
        description.innerText="";
        const descriptions = document.createElement("div");
        button1.addEventListener("click",()=>{
            descriptions.innerText=ele.description;
            div.insertBefore(descriptions,button1);
        })
        button2.addEventListener("click",()=>{
            descriptions.innerText="";
            div.insertBefore(descriptions,button1); 
        })
        div.append(image,title,button1,button2);
        descriptions.style.textAlign = "justify"
        div.style.border= "2px solid black";
        div.style.height = "fit-content";
        div.style.boxShadow = "2px 2px 10px black"
        button1.style.color="white";
        button1.style.backgroundColor = "Black";
        button2.style.color="white";
        button2.style.backgroundColor = "Black";
        button1.style.marginRight = "10px";
        button1.style.padding = "8px";
        button2.style.padding = "8px";
        button1.style.marginBottom = "8px";
        button2.style.marginBottom = "8px";
        movie.append(div);
    })
})

const button = document.getElementById("button")
button.addEventListener("click",()=>{
    window.location.href="./form.html";
})