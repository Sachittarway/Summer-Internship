const data=[
    {
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg?VersionId=VSzUwnMrbhD64jwKU7p.e6KBcJaW9CvU",
        title: "Gupchup",
        description: "Gupchup, the most renowned food of the state famously known as Golgoppa or panipuri accross India . In the South, its Panipuri or Gapchup presented with Onion and Pudina water and in the East generally in Odisha, Bihar, Jharkhand, and West Bengal its Gupchup."
    },
    {
        image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_30/2943911/190723-easy-chow-mein-al-1414.jpg",
        title: "Chowmien",
        description: "In American Chinese cuisine, it is a stir-fried dish consisting of noodles, meat (chicken being most common but pork, beef, shrimp or tofu sometimes being substituted), onions and celery."
    },
    {
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/poori-puri-recipe.jpg",
        title: "Puri",
        description: "Puri (sometimes spelled as poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent."
    },
    {
        image: "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
        title: "Aloo Paratha",
        description: "ometimes spelled Alu Paratha, this potato stuffed flatbread is a popular Indian breakfast that combines two of my favorite starches in a single delectable package. Crisp on the outside and tender on the inside, this humble meal is as comforting as a hug."
    },
    {
        image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-1453880,resizemode-75,msid-70653292/magazines/panache/from-palms-to-plates-poha-is-a-deliciously-convenient-snack-that-now-rules-breakfast-menus/poha.jpg",
        title: "Poha",
        description: "Aloo Poha also known as the Batata Poha brings with it delicious tastes and textures of sweetness, sourness, softness and crunchiness. It is made tangy and spicy from green chillies and lemon juice along with boiled potatoes that further enhances the texture."
    },
    {
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg",
        title: "Dosa",
        description: "A dosa, also called dosai, is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar."
    }
]

const movie = document.getElementById("food");
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