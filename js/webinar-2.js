// --- Операция spread (распыление)

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9])   // concat

const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]]  // spread

console.log(numbers);


// Поиск самой маленькой температури (числа)
 
const temps = [18, 14, 12, 21, 17, 29];

console.log(Math.min(...temps));


// Сшиваем несколько массивов

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);



// Распыление объектов
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
const c = { ...a, ...b }; //то же самое, только spread 
 
console.log(c); // {x: 0, y: 2, z: 3}



// ------- Деструктуризация объектов

// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// const { rating, name, tracks, trackCount } = playlist;  // Деструктуризация объектa

// console.log(rating, name, tracks, trackCount);


// ------- глубокая деструктуризация

// const profile = {
//     name: 'Alex',
//     tag: 'lion',
//     location: 'Madagascar',
//     stats: {
//         followers: 50000,
//         views: 45678,
//         likes: 6000987,
//     },
// }

// const { name, tag, location, stats: { followers, views, likes }, } = profile;
// console.log(name, tag, location, followers, views, likes);



// ------- Деструктуризация массивов
const rgb = [200, 255, 100];

const [red, green, blue] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// Red: 200, Green: 255, Blue: 100


// 
const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
}

const entries = Object.entries(authors);

for (const [name, rating] of entries) {
    // const [name, rating] = entry;
    console.log(name, rating);
}


// ------- Операция rest (сбор)

// const profile = {
//     name: 'Alex',
//     tag: 'lion',
//     location: 'Madagascar',
//     stats: {
//         followers: 50000,
//         views: 45678,
//         likes: 6000987,
//     },
// }

// const { name, tag, location, ...restProperties } = profile;

// console.log(name, tag, location);
// console.log(restProperties);


// ------- Паттерн "обьект настроек"

const showProfileInfo = function ({
    name,
    tag,
    location,
    stats: { followers, views, likes }
}) {
    console.log(name, tag, location, followers, views, likes );
}


// ИЛИ
// const showProfileInfo = function (userProfile) {
//    const { name, tag, location, stats: { followers, views, likes }, } = userProfile;
 
//    console.log(name, tag, location, followers, views, likes );
// }


const profile = {
    name: 'Alex',
    tag: 'lion',
    location: 'Madagascar',
    stats: {
        followers: 50000,
        views: 45678,
        likes: 6000987,
    },
}

showProfileInfo(profile)



// ------- Работаем с коллекцией товаров в корзине

const cart = {
    items: [],
    getItems() { return this.items },
    add(product) {
        console.table(this.items);

        for (const item of this.items) {
            if (item.name === product.name) {
            //  console.log('Такой продукт уже есть ', product.name);
                item.quantity += 1;
                return;
         }   
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }
        
        this.items.push(newProduct)
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i];

            if (productName === name) {
                console.log('Нашли такой продукт', productName);
                console.log(i);

                items.splice(i, 1)
            }
        }
     },
    clear() {
        this.items = []
     },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const {price, quantity} of items) {
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
}

console.log(cart.getItems());

cart.add({ name: "🥥", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍉", price: 70 });
cart.add({ name: "🍌", price: 110 });
cart.add({ name: "🍌", price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove("🥥")
console.table(cart.getItems());

cart.clear()
console.log(cart.getItems());

