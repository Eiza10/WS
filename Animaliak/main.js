//fitxategi nagusia
import {dog} from "./dog.js";
import {animalia} from "./animalia.js";

let animali = new animalia("animalia");
animali.speak();

let doggy = new dog("Rex", "Labrador");
doggy.speak();
console.log(doggy.izena);