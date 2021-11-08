class BaseCustomer{
    constructor(id, customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new BaseCustomer(1,"12345");
// console.log(customer.id) //undifined

//prototyping
customer.name = "Aleyna Yücesoy"
console.log(customer.name)

BaseCustomer.bisey = "Bişey" //class'a yapılan prototyping
console.log(BaseCustomer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends BaseCustomer{
    constructor (firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends BaseCustomer{
    constructor (companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}