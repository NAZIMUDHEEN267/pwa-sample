const container = document.querySelector(".container")
const coffees = [
    { name: "Perspiciatis", image: "images/coffee1.jpg" },
    { name: "Voluptatem", image: "images/coffee2.jpg" },
    { name: "Explicabo", image: "images/coffee3.jpg" },
    { name: "Rchitecto", image: "images/coffee4.jpg" },
    { name: " Beatae", image: "images/coffee5.jpg" },
    { name: " Vitae", image: "images/coffee6.jpg" },
    { name: "Inventore", image: "images/coffee7.jpg" },
    { name: "Veritatis", image: "images/coffee8.jpg" },
    { name: "Accusantium", image: "images/coffee9.jpg" },];

const showCoffees = () => {
    let elements = "";

    coffees.forEach((item) => 
    (elements += `<div class="card">
    <img class="card--avatar" src=${item.image} />
    <h1 class="card--title">${item.name}</h1>
    <a class="card--link" href="#">Taste</a>
  </div>`))

  container.innerHTML = elements;
}

document.addEventListener("DOMContentLoaded", showCoffees);

window.addEventListener("load", (e) => {
})

if('serviceWorker'){
    navigator.serviceWorker.register('/sw.js')
    .then(function(e){
        console.log(e);
    })
}