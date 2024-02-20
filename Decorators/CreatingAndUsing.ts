const sealed = (target: Function): void => {
    console.log('Sealing the constructor')
    Object.seal(target)
    Object.seal(target.prototype)
}

@sealed
class Movies {
    watch() {
        console.log('Watching movies')
    }
}

const sealed1 = (name: string) => {
    return (target: Function) => {
        console.log(`Sealing the constructor: ${name}`)
        Object.seal(target)
        Object.seal(target.prototype)
    }
}

@sealed1('Movies1')
class Movies1 {

    @readOnly
    watch() {
        console.log('Watching movies')
    }
}

//Class decorators that replace contructors
export function logger<TFunction extends Function>(target: TFunction) {
    let newConstructor: Function = () => {
        console.log('Creating new instance')
        console.log(target)
    }
    newConstructor.prototype = Object.create(target.prototype)
    newConstructor.prototype.constructor = target
    return <TFunction>newConstructor
}

//Using method decorators

class Movies1 {
    
    @writable(true)
    watch() {
        console.log('Watching movies')
    }
}

const readOnly = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(`Setting ${propertyKey} to be read-only`)
    descriptor.writable = false;
}

const writable = (isWritable: boolean) => {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(`Setting ${propertyKey}.`)
        descriptor.writable = isWritable;
    }
}