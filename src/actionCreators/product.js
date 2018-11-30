import {
  GET_PRODUCTS,
  GET_PRODUCT,
  SALE,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product";
import axios from "axios";

export function getProductsActionCreator() {
  return async dispatch => {
    dispatch({ type: GET_PRODUCTS });
    let response = await axios.get("http://localhost:4000/products");
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      products: response.data
    });
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
