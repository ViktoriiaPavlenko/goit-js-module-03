const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
//   const { items } = this;
// let total = 0
//  for (const {price, quantity} of items) {
//             total = price * quantity; }
//         return total;   
  // Пиши код выше этой строки

    let total = 0
    for (const product of products) {
        if (product.hasOwnProperty[propName]) {
            total = price * quantity
        }
        
    }
    return total
}

