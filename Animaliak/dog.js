import { animalia } from "./animalia.js";

class dog extends animalia {

    constructor(izena, arraza) {
        super(izena);
        this._arraza = arraza;
    }

    speak() {
        console.log("Guau guau!");
    }
}
export { dog };