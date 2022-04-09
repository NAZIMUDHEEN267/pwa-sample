// container dom variable
const container = document.querySelector(".container");

// coffee images 
const coffees = [
  { name: "Perspiciatis", image: "./images/coffee1.jpg" },
  { name: "Voluptatem", image: "./images/coffee2.jpg" },
  { name: "Explicabo", image: "./images/coffee3.jpg" },
  { name: "Rchitecto", image: "./images/coffee4.jpg" },
  { name: " Beatae", image: "./images/coffee5.jpg" },
  { name: " Vitae", image: "./images/coffee6.jpg" },
  { name: "Inventore", image: "./images/coffee7.jpg" },
  { name: "Veritatis", image: "./images/coffee8.jpg" },
  { name: "Accusantium", image: "./images/coffee9.jpg" },];


  // importing images to dom
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


// =========== service worker 
const worker = this.navigator.serviceWorker;

if (worker) {
  worker.register('sw.js');
}

window.localStorage.removeItem("install");

let defferPrompt;
// listening browser homes screen add event 
self.addEventListener("beforeinstallprompt", (e) => {
  // prevent to fire event  
  e.preventDefault();

  defferPrompt = e;
  console.log(e);
})

// when the app installed
window.addEventListener("appinstalled", () => {
  window.localStorage.setItem("install", true);
});

// add message banner to body node
if(!window.localStorage.getItem("install")){
  setTimeout(() => {
    document.body.innerHTML += `<div class="install-message">
        <p>Benefit of our app. It's totally free, 
          doesn't need any storage space. faster and simple to use
        </p>
        <div class="buttons"> 
         <button class="btn-deny">Not now</button>
         <button class="btn-accept">install</button>
        </div>
      </div>`;
  
      // variables
     const installMsg = document.querySelector(".install-message")
     const rejectBtn = document.querySelector(".btn-deny");
     const acceptBtn = document.querySelector(".btn-accept");
  
      // for visibility css property overriding
      setTimeout(()=> {
        installMsg.style.visibility = "visible";
      }, 400)
  
     // buttons event listener 
     acceptBtn.addEventListener("click", () => {
       defferPrompt.prompt();
     })
  
     rejectBtn.addEventListener("click", () => {
         installMsg.classList.add("remove");
  
        setTimeout(() => {
         installMsg.hidden = true;
        }, 500)
  
        })
     
  }, 2000);  
}

