import faker from 'faker';

let products = '';
const PRODUCTS_QTD = 5;

for (let i = 0; i < PRODUCTS_QTD; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

console.log(products);
