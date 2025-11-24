// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
const pronoun = ['the', 'our', 'my', 'us',];
const adj = ['great', 'famous', 'nervous'];
const noun = ['jogger', 'sitcom', 'virus'];
const extensions = ['com', 'net', 'us', 'io', 'es']

const generadorDominios = ((pronombre, adjetivo, nombre, extension) => {
  for (let i = 0; pronombre.length > i; i++) {
    for (let j = 0; adjetivo.length > j; j++) {
      for (let k = 0; nombre.length > k; k++) {
        let dominio = false;
        if (extensions.includes(noun[k].slice(-2))) {
          console.log(`${pronombre[i]}${adjetivo[j]}${nombre[k].slice(0, -2)}.${nombre[k].slice(-2)}`);
          dominio = true
        }
        else if (extensions.includes(noun[k].slice(-3))) {
          console.log(`${pronombre[i]}${adjetivo[j]}${nombre[k].slice(0, -3)}.${nombre[k].slice(-3)}`);
          dominio =true
        } 
        if (!dominio) {
          for (let l = 0; extension.length > l; l++) {
            console.log(`${pronombre[i]}${adjetivo[j]}${nombre[k]}.${extension[k]}`)
          }
        }
      }
    }
  }
})
generadorDominios(pronoun, adj, noun, extensions)
