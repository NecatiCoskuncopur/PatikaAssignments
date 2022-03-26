const menu = [
  {
    id: "germany",
    category: "Germany",
    title: "Bratkartoffeln",
    price: "10€",
    img: "https://blog.biletbayi.com/wp-content/uploads/2018/03/bratkartoffeln-696x522.jpg",
    info: "German-Style Pan Fried Potatoes with Bacon, aka Bratkartoffeln, is a traditional Oktoberfest side-dish that is crispy, comforting and jam-packed with flavor!"
},
{
  id: "germany",
  category: "Germany",
  title: "Schweinsbraten",
  price: "17€",
  img: "https://blog.biletbayi.com/wp-content/uploads/2018/03/schweinsbraten-696x478.jpg",
  info: "Schweinebraten is a traditional German pork roast originating from Bavaria. It is typically prepared for Sunday lunch and consists of sliced pork roast that's served with homemade gravy, semmelknödel (bread dumplings) or potato dumplings, and either sauerkraut or rotkohl (red cabbage)."
},
{
  id: "germany",
  category: "Germany",
  title: "Schwarzbrot",
  price: "12€",
  img: "https://blog.biletbayi.com/wp-content/uploads/2018/03/chwarzbrot-scaled.jpg",
  info: "These clay breads, which have a 24-hour baking time, are prepared from barley. Walnuts can also be added to it, including plenty of moonshine."
},
{
  id: "poland",
  category: "Poland",
  title: "Zurek",
  price: "30zł",
  img: "https://polonya.co/wp-content/uploads/2016/12/Zurek-560x420.jpg",
  info: "Żurek is a traditional Polish soup characterized by its distinctively sour taste, which comes from sour leavening, or the fermentation of bread and rye flour"
},
{
  id: "poland",
  category: "Poland",
  title: " Kremowki",
  price: "15zł",
  img: "https://polonya.co/wp-content/uploads/2016/12/maxresdefault-696x392.jpg",
  info: "It is a Polish dessert made from French puff pastry and vanilla cream filling."
},
{
  id: "france",
  category: "France",
  title: "Blanquette de veau",
  price: "25€",
  img: "https://cdn.yemek.com/uploads/2014/11/dana-yahni-tarifi.jpg",
  info: "Blanquette de veau is a French veal ragout in which neither the veal nor the butter is browned in the cooking process. To refrain from browning meat and fat in this way, is to cook them en blanquette."
},
{
  id: "france",
  category: "France",
  title: "Ratatouille",
  price: "10€",
  img: "https://cdn.yemek.com/uploads/2017/04/ratatouille-tarifi.jpg",
  info: "Ratatouille  is a very healthy and low fat summer vegetable stew.  It is a great way to use up the abundant roundup of fresh summer vegetables from the garden."
},
{
  id: "england",
  category: "England",
  title: "Beef Wellington",
  price: "15£",
  img: "https://images.immediate.co.uk/production/volatile/sites/30/2012/09/Beef-wellington-d4f3320.jpg",
  info: " A traditional Beef Wellington consists of a beef tenderloin wrapped in layers of pâté, duxelles (a finely chopped mushroom mixture), parma ham, and puff pastry, then baked."
},
{
  id: "england",
  category: "England",
  title: "Banoffee Pie",
  price: "10£",
  img: "https://img.chefkoch-cdn.de/rezepte/125001053614007/bilder/428158/crop-414x414/banoffee-pie.jpg",
  info: "A rich combination of different textures and flavors, banoffee pie combines a cookie/biscuit or graham cracker crust with silky dulce de leche, bananas, and homemade whipped cream."
}
]

const btnConts = document.getElementById("btnConts");       
const menuContent = document.getElementById("menuContent");

//addlisteners
btnConts.addEventListener("click", getCategory);
window.addEventListener("DOMContentLoaded",bringFoods)

//filter by clicking button
function getCategory(e) {
    filter(e.target.value); //filter function send which button we click
    if(e.target.value == "all"){
        bringFoods(); // bringFoods run when we click "all button" & form loaded
     }

}


function filter(category1) {

    while (menuContent.firstChild) {//Clear list before get the filtered foods

        menuContent.removeChild(menuContent.lastChild);
    }

    menu.forEach(food => {  // itirating on menu array which defined above

        if (category1 == food.id) {

            menuContent.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${food.img}" class = "photo" alt="_">
        <span class="badge rounded-pill bg-primary">${food.category}</span>
        <div class="menu-info">
            <div class="menu-title">
                <h3>${food.title}</h3>
                <h3>${food.price}</h3>
            </div>
            <div class="menu-text">
                <p>${food.info}</p>
            </div>
        </div>`

        }

    });
}


function bringFoods(){

    menu.forEach(food => {   

            menuContent.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${food.img}" class = "photo" alt="_">
        <span class="badge rounded-pill bg-primary">${food.category}</span>
        <div class="menu-info">
            <div class="menu-title">
                <h3>${food.title}</h3>
                <h3>${food.price}</h3>
            </div>
            <div class="menu-text">
                <p>${food.info}</p>
            </div>
        </div>`
        

    });

}