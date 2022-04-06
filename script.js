window.addEventListener("beforeInstallPrompt", (e) => {
    console.log(e.platforms);
})

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

const addBtn = document.querySelector(".add-button");

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
  
    addBtn.addEventListener('click', () => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    });
  });