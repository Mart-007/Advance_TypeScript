const uielement = (target: Function) => {
    console.log('some decorator for ui')
}

const deprecated = (t: any, p: string, d: PropertyDescriptor) => {
    console.log('This method will go away soon')
}

@uielement 
class ContactForm {
    @deprecated
    someOldMethod() {
        //...
    }
}

//Decorator Factories
const element = (el: string) => { //return a function that accepts 1 params
 return (target: Function) => {
    console.log(`Create new element: ${el}`)
 }
}

@element('SimpleContactForm')
class ContactForm1 {
    //contact properties
}

//Class Decorator

//class decorator type
<TFunction extends Function>(target: TFunction) => TFunction | void