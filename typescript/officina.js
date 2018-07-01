var Fiat500 = /** @class */ (function () {
    function Fiat500(motore) {
        this.motore = motore;
        this.velocita = 0;
    }
    Fiat500.prototype.accelera = function () {
        this.velocita = this.motore.aumentaPotenza();
        // NOTA: un campo o un metodo di classe
        // si accedono sempre includendo il this
        return this.velocita;
    };
    return Fiat500;
}());
var Motore1200 = /** @class */ (function () {
    function Motore1200() {
    }
    Motore1200.prototype.aumentaPotenza = function () {
        return 50;
    };
    Motore1200.prototype.diminuisciPotenza = function () {
        return -50;
    };
    return Motore1200;
}());
var Motore1500 = /** @class */ (function () {
    function Motore1500() {
    }
    Motore1500.prototype.aumentaPotenza = function () {
        return 100;
    };
    Motore1500.prototype.diminuisciPotenza = function () {
        return -50;
    };
    return Motore1500;
}());
var Officina = /** @class */ (function () {
    function Officina() {
        this.macchine = []; // istanziamo un array
        this.macchine.push(new Fiat500(new Motore1200())); //aggiungiamo una istanza di Macchina
        this.macchine.push(new Fiat500(new Motore1500()));
    }
    Officina.prototype.testaMacchine = function () {
        for (var _i = 0, _a = this.macchine; _i < _a.length; _i++) { //scorriamo gli elementi dell'array
            var m = _a[_i];
            console.log(m.accelera());
        }
    };
    return Officina;
}());
var officina = new Officina();
officina.testaMacchine();
