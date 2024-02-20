
type Category = 'Manager' | 'Non-Manager'

interface ICallBack {
    (err: Error, titles: string[]): void
}

const getBookTitleByCat = (cat) => {
    return cat
}

export const getEmployeeCategory = (cat: Category, callback: ICallBack): void => {

    setTimeout(() => {
        try {
            let books: string[] = getBookTitleByCat(cat)
            if(books.length > 0) {
                callback(null, books);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null)
        }
    }, 2000)
}

export const logCategorySearch = (err: Error, titles: string[]): void => {
    if(err) {
        console.log(`Error message: ${err.message}`)
    } else {
        console.log('Found titles')
        console.log(titles)
    }
}

console.log('Initializing category search...')
getEmployeeCategory('Manager', logCategorySearch)
console.log('Search submitted...')