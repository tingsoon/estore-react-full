import {
  GET_PRODUCTS,
  GET_PRODUCT,
  SALE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actionTypes/product";
import axios from "axios";

export function getProductsActionCreator() {
  return async dispatch => {
    dispatch({ type: GET_PRODUCTS });
    try {
      let response = await axios.get("http://localhost:4000/products");
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        products: response.data
      });
    } catch (err) {
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        err
      });
    }
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
