//Polymorphism

class LibraryBook {
    checkin(){
        console.log('checkin books')
        return this
    }
    checkout(){
        console.log('checkout books')
        return this
    }
}

class ChildrenBooks extends LibraryBook {
    clean(){
        console.log('clean books')
        return this
    }
}

const library = new ChildrenBooks();

library.checkin().clean().checkout()