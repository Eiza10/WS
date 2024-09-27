
class animalia {
    constructor(izena) {
        this._izena = izena;
    }

    speak() {
        console.log(this._izena + " is speaking");
    }

    get izena() {
        return this._izena;
    }
}

export { animalia };