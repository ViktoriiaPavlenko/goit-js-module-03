// ------- OBJECTS

const obj = {
  // props (key: value,)
  prop_a: 'A',
  prop_b: 'B',
  prop_c: 2,
  prop_d: null,
  prop_e: true,
  name: 'Viktoriia',
  age: 23,
  isOnline: false,
  isStudent: true,
  skills: ['HTML', 'CSS'],
    music: {
        bands: ['Bi-2'],
        songs: ['hdfash'],
    },
}
console.log(obj);


// ------- Получить значения свойства в объекте GET READ
// 1й способ
console.log('name:', obj.name)
console.log('age:', obj.age)


// 2й способ
console.log(obj['name'])
console.log(obj['age'])
 

// ------- Изменить значение свойства в объекте UPDATE

console.log(obj.age)
obj.age = 18
console.log(obj.age)

// такого свойства пока еще нет - поэтому undefined
console.log(obj.languages)

// а теперь добавляем это свойство в объект POST CREATE
obj.languages = ['ukrainian', 'russian', 'english']
console.log(obj.languages)


// ------- short props

let age = 30
console.log(age)

const skills = ['HTML', 'CSS']
console.log(skills)

const myUser = {
  age,
  skills,
}

console.log(myUser)

// ------- вычисляемые свойства obj[var]

let key1 = 'userName'
let key2 = 'lastName'
let key3 = 'skills'

const nextUser = {
  studentName: 'user',
  [key1]: 'user',
}

// console.log(nextUser)


// ------- for in
for (let prop in nextUser) {
  // console.log('key', prop)
  //   console.log('value: ', obj[key])
}
const object = {}
for (let key in object) {
  console.log('key', key)
}

// console.dir(Object)
const product = {
  price: 10,
}
console.log('grandfather', product)

// CREATE {}
const newProduct = Object.create(product)
console.log('father', newProduct)

newProduct.price = 100

const newNewProd = Object.create(newProduct)
console.log('new son', newNewProd)
newNewProd.title = 'product'

for (let key in newNewProd) {
  if (newNewProd.hasOwnProperty(key)) {
    console.log('key of newNewProd', key)
    console.log(newNewProd[key])
  }
}

// obj.hasOwnProperty()
// console.log(newNewProd.hasOwnProperty('price')) // false
// console.log(newProduct.hasOwnProperty('price')) // true


// ------- Object.keys(obj) - массив ключей
const myKeys = Object.keys(obj)
console.log(myKeys)
console.log(myKeys[0]) // key at index 0

console.log(obj[myKeys[0]]) // A string
//          obj['prop_a']

// ------- Object.values(obj) - массив значений
const myValues = Object.values(obj)
console.log(myValues)

const prod = {
  count: 2,
  price: 10,
}

const vals = Object.values(prod)
console.log(vals)

const totalPrice = vals[0] * vals[1]
console.log(totalPrice)

// ------- Object.entries(obj) - многомерный массив в виде
// [[key1, value1], [key2, value2], [key3, value3]]

const myEntries = Object.entries(prod)
console.log(myEntries)



// ------- this

let nickname = 'BLA BLA BLA'
const user = {
  nickname: 'Vika',
  showUserName() {
    return `Hello, ${this.nickname}!`
  },
}

console.log(user.showUserName())