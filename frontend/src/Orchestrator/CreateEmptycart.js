import { CREATE_EMPTY_CART } from '../ApiRequests/Mutations';
import BACKEND_BASE_URL from '../ApiRequests/routes';

async function createEmptyCart() {
  const response = await fetch(BACKEND_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(CREATE_EMPTY_CART),
  });

  const data = await response.json();
  return data.createEmptyCart.cartId;
}

export default createEmptyCart;
