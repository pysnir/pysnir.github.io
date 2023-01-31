// console.log("Test console");
// alert('Hello world')
// let age = 17;
// let phrase = `Vous avez ${age} ans.`;
// console.log(phrase)

// if (age >= 18) {
//     alert("Vous êtes majeur")
// } else {
//     alert("Vous êtes mineur!")
// }

// (() => {
//     console.log("Essai de fonction anonyme");
// })();


// (function direqlqchose() {
//     console.log("Bonjour tout le monde!");
// })();
let myObject = document.querySelector('h1');
let bonneRep = document.querySelector('#btn1')
let mauvaiseRep = document.querySelector('#btn2')
let reponse = document.querySelector(".bonne")
let mousemove = document.querySelector('.mousemove')
console.log(mousemove);

const blockQuestion = document.querySelector(".click-event");

myObject.style.color="green";
blockQuestion.style.borderRadius = "50px";

bonneRep.addEventListener("click", () => {
    // reponse.style.visibility='visible';
    reponse.classList.add("show-response")
    reponse.style.color='Green';
})

mauvaiseRep.addEventListener("click", () => {
    // reponse.style.visibility='visible';
    reponse.classList.add("show-response")
    reponse.style.color='red';
})


// console.log(bonneRep);

window.addEventListener("mousemove", (e)=> { 
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY+ "px";
    })
