import faker from 'faker';

let products = '';
const PRODUCTS_QTD = 5;

for (let i = 0; i < PRODUCTS_QTD; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;

// Context/Situation #1
// Nós vamos executar este arquivo em desenvolvimento isoladamente.
// Mós estamos usando nosso arquivo index.html localmente.
// Definitivamente, temos um elemento com um id of 'dev-products'
// Queremos renderizar nosso app nesse elemento, sem atraso, pois estamos em desenvolvimento.

// Context/Situation #1
// Nós vamos executar este arquivo em desenvolvimento ou produção através do CONTAINER app.
// NÃO HÁ GARANTIA que existe um elemento com o id 'dev-products'
// Portanto, não queremos renderizer imediatamente o app, porque esse elemento que estamos procurando pode não existir.
