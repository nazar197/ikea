import { getData } from './getData.js';
const wishList = ['idd005', 'idd065', 'idd097', 'idd023'];
const cartList = [
  {
    id: 'idd016',
    count: 3
  },
  {
    id: 'idd043',
    count: 1
  },
  {
    id: 'idd022',
    count: 2
  }
];

export const loadData = () => {

  if (location.hash) {
    getData.item(location.hash.substring(1), data => console.log(data));
  }
  
  if (location.pathname.includes('cart')) {
    getData.cart(cartList, data => console.log(data));
  }

};