import { BACKEND_BASE_URL } from '../ApiRequests/routes';
import { END_POINTS } from './Constants';
import { HEADERS } from './Constants';

async function createEmptyCart() {
  const url = BACKEND_BASE_URL + END_POINTS.CREATE_EMPTY_CART_END_POINT;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      [HEADERS.CONTENT_TYPE]: HEADERS.APPLICATION_JSON,
    },
    body: JSON.stringify({}),
  });

  const data = await response.json();
  return data.createEmptyCart.cartId;
}

export default createEmptyCart;
