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

   */  