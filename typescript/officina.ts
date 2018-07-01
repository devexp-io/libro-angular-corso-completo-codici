interface Motore {
    aumentaPotenza(): number

    diminuisciPotenza(): number
}

interface Macchina {
    accelera()
}

class Fiat500 implements Macchina {

    private velocita = 0

    constructor(private motore: Motore) { //usiamo la sintassi compatta
    }

    accelera() {
        this.velocita = this.motore.aumentaPotenza()
        // NOTA: un campo o un metodo di classe
        // si accedono sempre includendo il this
        return this.velocita
    }

}

class Motore1200 implements Motore {
    aumentaPotenza() {
        return 50
    }

    diminuisciPotenza() {
        return -50
    }

}

class Motore1500 implements Motore {
    aumentaPotenza() {
        return 100
    }

    diminuisciPotenza() {
        return -50
    }

}

class Officina {
    macchine: Macchina[] = [] // istanziamo un array

    constructor() {
        this.macchine.push(new Fiat500(new Motore1200())) //aggiungiamo una istanza di Macchina
        this.macchine.push(new Fiat500(new Motore1500()))
    }

    testaMacchine() {
        for (let m of this.macchine) { //scorriamo gli elementi dell'array
            console.log(m.accelera())
        }
    }
}

let officina = new Officina()
officina.testaMacchine()



