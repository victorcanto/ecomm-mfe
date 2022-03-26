import faker from 'faker';

const mount = (htmlEl) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  htmlEl.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

export { mount };
