const num = [1,2,3,4,5];

const [first,, third, ...rest] = num; //spread operator

console.log(first)
console.log(third)
console.log(rest)

function sumAndMul(a,b){
  return [a+b, a*b, a/b]
}

const [sum, multiply, division='no division'] = sumAndMul(2,6)

console.log(sum)
console.log(multiply)
console.log(division)

/****OBJECT DESTRUCTURING ***********/
const personOne = {
  name: 'Lye',
  age: 27,
  address: {
    city: 'Jeonju',
    country: 'Korea'
  }
}

const personTwo = {
  name: 'billie',
  age: 37,
  address: {
    city: 'Yeosu',
    country: 'Korea'
  }
}

const { name: firstName, age, favoriteFood = 'rice' } = personTwo //name references the key in object, but the firstName is the name of the variable we made it

console.log(firstName)
console.log(age)
console.log(favoriteFood)

const { name: firstName2, address: { city } } = personOne

console.log(firstName2)
console.log(city)

function printUser({ name, age, favoriteFood = 'kimchi' }){
  console.log(`Name is: ${name}, food is ${favoriteFood}`)
}

printUser(personOne)