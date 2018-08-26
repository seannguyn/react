console.log("hello world");

const person = {
  name:"Sean",
  address: {
    street: "7 bruce",
    city: 'kingsford',
    postcode: 2032
  },
  email:'seannguyen5696@gmail.com'
}

const customer = {
  ...person,
  id: '1drft'
}

console.log(person);
console.log(customer);

const fruits = ['apples','oranges','pears']

fruits.forEach( (fruit) => console.log(fruit+" hahaha") )

const singeFruit = fruits.map( (fruit) =>
  fruit.slice(0,-1).toUpperCase()
)
console.log(singeFruit);


const group = [

  {
    id: 1,
    name: "Cece"
  },
  {
    id: 2,
    name: "Sean"
  },
  {
    id: 3,
    name: "Bum"
  }

]

function checkID(indiv) {
  if (indiv.id > 1) {
    return indiv
  }
}

const newG = group.filter((indiv) => checkID(indiv));

console.log(newG);



const arr1 = [1,2,3,4,5,6,7,8,9,10]

function evenNum(num) {
  if (num % 2 == 0) {
    return num;
  }
}

const arr2 = [...arr1.filter((num) => evenNum(num))]

console.log(arr2);


class Parents {
  constructor(name, job, income) {
    this.name = name;
    this.job = job;
    this.income = income;
  }

  tax() {
    return this.income * 0.3;
  }
}

const p1 = new Parents("Sean","milli","1000000")
const p2 = new Parents("K","Billi","1000000")
console.log(p1.tax());
console.log(p2);
