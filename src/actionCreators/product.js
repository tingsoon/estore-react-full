import { GET_PRODUCTS, GET_PRODUCT, SALE } from "../actionTypes/product";

export function getProductsActionCreator() {
  return {
    type: GET_PRODUCTS
  };
}

export function getProductActionCreator(id) {
  return {
    type: GET_PRODUCT,
    id
  };
}

export function saleActionCreator(id) {
  return {
    type: SALE,
    id
  };
}
