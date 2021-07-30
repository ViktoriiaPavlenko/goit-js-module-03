// ------- Destructuring

// const product = {
//   title: 'mask',
//   price: 100,
//   values: ['50ml', '30ml', '100ml'],
// }

// function showTitle(name) {
//   console.log(`this product is ${name}`)
// }
// showTitle('Parfum')
// console.log(product.title)

// showTitle(product.title)
// const { title: myTitle } = product
// showTitle(myTitle)

const products = {
  parfums: {
    male: [
      {
        title: 'Home',
        name: 'Dior',
        price: 3000,
      },
    ],
    female: [
      {
        title: 'Jadore',
        name: 'Dior',
        price: 2800,
      },
    ],
  },
  masks: {},
}
console.log('prop:', products.parfums.female[0].title)

let title = products.parfums.female[0].title
// console.log('title:', title)



// ------- Destructuring

// const { property1 } = obj
const { price, title: productTitle, name } = products.parfums.female[0]
console.log('productTitle:', productTitle)
console.log('name:', name)
console.log('price:', price)

const { title: maleParfumTitle } = products.parfums.male[0]
// console.log('maleParfumTitle:', maleParfumTitle)

const { female, male } = products.parfums
console.log(female, male)

const user = {
  login: 'Vika',
  pass: 'aldjncbw;hefiq2r8437ry8',
  userInfo: {
    email: '',
    phone: '',
  },
}
function sayHello(name) {
  alert(`${name} Hello!`)
}
const { login } = user
// sayHello(login)


// // ------------------------
const rgb = [255, 39, 45]
console.log(rgb)

// const [] = array

const [red, , blue] = rgb

console.log('red:', red)
// console.log('green:', green)
console.log('blue:', blue)


// ----------SPREAD - распыление

// распыление элементов массива - Math.min(...arr)
const numbers = [1, 2, 3, 4, 5, 6, 7, 84]

console.log(Math.max(3, 6, 3, 2, 6, 9, 1, 2, 34))
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

function getResult(a, b) {
  let total = 0
  console.log(arguments) //pseudoarray
  // создание нового массива через pаспыление исходного
  const nums = [...arguments] // normal array

  for (let num of nums) {
    total += num
  }
  console.log(nums)
  return total
}
console.log(getResult(2, 5, 4, 5, 6))

const first = [1, 2, 3]
const cloneFirst = first.slice(1, 2)
console.log('cloneFirst:', cloneFirst)
console.log(first === cloneFirst)

const newArr = first.concat(cloneFirst)
console.log(newArr)

// + slice() || добавить любое кол-во элементов
const spreadArr = [...first, 444, ...first.slice(1, 2)]
console.log(spreadArr)

// распыление объектов {...obj1, ...obj2}, можно добавляя отдельные св-ва
// const product = {
//   title: 'Cake',
//   name: 'Napoleon',
// }

// console.log(product)

// const params = {
//   category: 'sweets',
// }
// const { category } = params

// const newProduct = { ...product, price: 30, category }
// // console.log(newProduct)

// console.log(product === newProduct)


// ------------- REST - сбор

// аргументы в функциях в полноценный массив
// const getTotalResult = (...args) => {
//   // console.log(args)
//   let total = 0
//   for (let num of args) {
//     total += num
//   }
//   return total
// }
// let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65)
// console.log('result', result)

// result = getTotalResult(22, 35, 1, 25, 31, 24, 44, 6, 78)
// console.log('result', result)


// 
// (email, arg1, ...for, argN)
// { studentMail: "", score: 0 }

// const scoresOfStudents = []
// function getResultsOfTests(mail, ...scores) {
//   // console.log(mail)
//   // console.log(scores)
//   let totalScore = 0
//   for (let score of scores) {
//     totalScore += score
//   }
//   console.log('totalScore:', totalScore)
//   const obj = {
//     email: mail,
//     score: totalScore,
//   }
//   console.log(obj)
//   scoresOfStudents.push(obj)
//   console.log(scoresOfStudents)
// }

// getResultsOfTests('a@gmail.com', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
// getResultsOfTests('b@gmail.com', 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1)
// getResultsOfTests('c@gmail.com', 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1)
// getResultsOfTests('d@gmail.com', 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1)
// getResultsOfTests('e@gmail.com', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)




// -------PRACTICE

//  TASK 1
// 
//  Создать объект товара со свойствами name, price,
//  quantity и методами, которые показывают их текущее значение
//  и методами, что изменяют их значения.
// 
const product = {
    name: 'prod',
    price: 0,
    quantity: 0,

    showName() {
        console.log(this.name)
    },
    showPrice() {
        console.log(this.price)
    },
    showQuantity() {
        console.log(this.quantity)
    },
    changeName(value) {
        return (this.name = value)
    },
    changePrice(value) {
        return (this.price = value)
    },
    changeQuantity(value) {
        return (this.quantity = value)
    },
    // deleteProp(propName) {
    //     delete this[propName]
    // }

    updateQuantity(value, isCost) {
        // 1 if..else
        if (isCost) {
            // уменьшаем
            return (this.quantity -= value)
        } else {
            return (this.quantity += value)
        }
        // // 2 with Guard CLause
        // if (isCost) return (this.quantity -= value)
        // return (this.quantity += value)
        // // 3 by Ternary
        // isCost ? (this.quantity -= value) : (this.quantity += value)
        // },
    }
}
console.log(product)
// product.deleteProp('name')

// // checkup =========
product.showName()
product.showPrice()
product.showQuantity()

product.changeName('Peach')
product.changePrice(55)
product.changeQuantity(3)
console.log(product)
// product.showName()

product.showQuantity() // до уменьшения веса
product.updateQuantity(1, true)
product.showQuantity() // после
product.updateQuantity(0.5, false)
product.showQuantity() // после

// TASK 2
// ============================
// Добавь к объекту product метод, который высчитывает
// стоимость общего количества текущего товара
// 
product.getTotalPrice = function () {
  return this.price * this.quantity
}

// checkup =========
console.log(product.getTotalPrice())

// TASK 3
// Записать в переменную totalPrice общую стоимость
// всех товаров в массиве products
// 
// const products = [
//   { name: 'Grape', price: 80, quantity: 2 },
//   { name: 'Banana', price: 30, quantity: 5 },
//   { name: 'Kiwi', price: 100, quantity: 1.5 },
// ]
// // 
// function getTotalPrice(arr) {
//   let totalPrice = 0

//   for (let i = 0; i < arr.length; i++) {
//     console.log(products[i])
//     totalPrice += products[i].price * products[i].quantity
//   }
//   console.log('totalPrice', totalPrice)
// }
// getTotalPrice(products)


// TASK 4
// Создать функцию, которая принимает массив продуктов,
// название товара и его количество
// и выводит его стоимость, если товара достаточно или сообщает о том,
// что товара нет на складе в указанном количестве
// 


const allProducts = [
  { name: 'bread', price: 20, quantity: 100 },
  { name: 'milk 2,5%', price: 30, quantity: 24 },
  { name: 'cheese', price: 300, quantity: 10 },
  { name: 'chorizo', price: 560, quantity: 4 },
  { name: 'lemon', price: 60, quantity: 9 },
  { name: 'lavazza', price: 250, quantity: 24 },
]
// console.log(allProducts)
// 
function getResponse(arr, prod, count) {
    // console.log(arr)
    for (let product of arr) {
        // console.log(product.name)
        // проверяем есть ли желаемый товар prod в массиве продуктов
        // 1й вариант
        // if (product.name === prod) {
        //     console.log(`${prod} есть на складе`)
        //     if (product.quantity >= count) {
        //         let cost = product.price * count
        //         console.log(`${prod} можете купить за ${cost} монет`)
        //     } else {
        //         console.log(`${prod} нет в достаточном количестве`)
        //     }
        // }
        // 2й вариант
        if (product.name === prod) {
            return product.quantity >= count
                ? console.log(`${prod} можете купить за ${product.price * count} монет`)
                : console.log(`${prod} нет в достаточном количестве`)
        }
        
    }
    console.log(`${prod} нет такого на складе`)
}
getResponse(allProducts, 'lavazza', 29)