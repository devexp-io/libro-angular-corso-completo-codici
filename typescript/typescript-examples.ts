let x = 1;
console.log(x); //

let y = x + 2;
console.log(y); //

let z = {name: "Salvatore", age: x * 33}
console.log(z.name); //


let d: Date = new Date()


let w: any = 1
w = "Romeo" // ok poiché w è di tipo any


let list = [] //array vuoto
list.push(1) //aggiunta di elementi all'array
list.push(3)
list.push(2)

for (let l of list) {
    console.log(l) //
}

list.sort()
console.log(list) //

let list2 = [{name: "a"}, {name: "c"}, {name: "b"}] //array con valori iniziali

// ordinamento di oggetti
list2.sort((l1, l2) => {
    return l1.name.localeCompare(l2.name)
})
console.log(list2) //

//lista con oggetti il cui nome è "a"
let withNameA = list2.filter(l => l.name == "a")
console.log(withNameA) //

// trasformazione della lista: da lista di oggetti a lista di stringhe - il nome
let names = list2.map(l => l.name)
console.log(names) //


let filterByNameB = l => l.name == "b"
let withNameB = list2.filter(filterByNameB)


class User {
    name: string
    surname: string

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    fullname() {
        return this.name + " " + this.surname
    }
}

let u = new User("Salvatore", "Romeo")
console.log(u) //
console.log(u.fullname()) //


class User2 {
    constructor(public name: string, public surname: string) {
    }

    fullname() {
        return this.name + " " + this.surname
    }

    setName(name: string): void {
        this.name = name
    }
}


interface Animal {
    name: string
    age: number

    play()
}

class Dog implements Animal {
    constructor(private age: number, private name: string) {
    }

    play() {
        return this.name + " is running"
    }
}

console.log(new Dog(3, "Bobby").play()) //


interface DataFromServer {
    id: string
    values: number[] // un array di numeri
}

// let data:DataFromServer = http.loadData("loginUrl")


interface House {
    address: string
}

let home: House = {address: "via dei Matti numero 0"}
let home2 : House = {name: "Salvatore"}



