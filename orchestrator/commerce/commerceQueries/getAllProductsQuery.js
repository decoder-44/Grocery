import { gql } from 'graphql-tag';

export const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      uid
      iid
      productName
      price
      quantity
      available
    }
  }
`;
