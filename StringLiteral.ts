let empCategory: 'Manager' = 'Manager'

// let category: 'Manager' = 'Non-Manager' //Error

let category: 'Manager' | 'Non-Manager' = 'Non-Manager' 
let category1: 'Manager' | 'Non-Manager' = 'Manager' 

//Alias
type EmployeeCategory = 'Manager' | 'Non-Manager'

let category2: EmployeeCategory = 'Manager'