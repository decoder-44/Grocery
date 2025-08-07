export const CREATE_EMPTY_CART = {
  query: `
    mutation CreateEmptyCart {
      createEmptyCart {
        cartId 
      }
    }
  `
};
