//hente html element
const main_title = document.querySelector("#title");
const pluss_button = document.querySelector("#plus_button");
console.log(pluss_button);
const minus_button = document.querySelector("#minus_button");
console.log(minus_button);
const  reset = document.querySelector("#reset");

// vi må sette opp variabler som tekner
let count = 0;

pluss_button.addEventListener('click',()=>{

    count = count + 1;
    main_title.textContent = count;
    
    if (count >=1000){
        displayPrompt("You wasted 1000clicks worth of time! Winner! ")
    
        function displayPrompt(message) {
            // Display some form of box
            // Start simple
            prompt(message)
        };
    }
});



minus_button.addEventListener('click', ()=>{

    count = count - 1;
    main_title.textContent = count;
});

reset.addEventListener('click',()=>{

    count = 0;
    main_title.textContent = count;
});

/*lage funksjoner til knapper
function increment() {
    count = count + 1;
}

console.log(count);

function decrement() {
    count = count - 1;
}

console.log(count)
 her dar du en alerede laget funksjon og brukerden i en eventlistender, og lager en onclick effect.
pluss_button.addEvemtListener("click", increment);

minus_button.addEventListener("click", decrement);

   */  