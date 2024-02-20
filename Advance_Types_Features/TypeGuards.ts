let a: string | number = 123

if(typeof a === 'number') {
     a = '123' //assign string
} else {
    Number('123') //assign number
}

//instanceof Type Guard
class Phone {
    call() {
        console.log('make a call')
    }
}

class Tablet {
    watch() {
        console.log('watch movie')
    }
}

let device: Phone | Tablet = new Phone()

if(device instanceof Phone) {
    device.call()
}

//User-Defined Type Guards
interface Vehicle { numberOfWheels: number; }

const isVehicle = (v: any):v is Vehicle => {
    return (<Vehicle>v).numberOfWheels !== undefined
}

class Car {
    vehicle() {
        return this
    }
}

let car = new Car()

if(isVehicle(car)) {
    console.log(`It's Vehicle`)
}

//type guard
const logVisitor = (params: string | number): void => {
    if(typeof params === 'number') {
        console.log(`${params} new visitors arrived.`)
    } else {
        console.log(`${params.toUpperCase()} visited.`)
    }
}

logVisitor(5)
logVisitor('Mart')

//Custom type guard
class Book {
    read() {
        return this
    }
}

class Magazine {
    readOnce() {
        return this
    }
}

const isBook = (text: Book | Magazine): text is Book => {
 return (<Book>text).read !== undefined
}

let readingMaterial: Book | Magazine