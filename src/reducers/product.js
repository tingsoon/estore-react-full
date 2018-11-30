import {
  GET_PRODUCTS,
  SALE,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product";
import { fromJS } from "immutable";

export default function productReducer(
  prevState = fromJS({ products: [], offers: [], sales: [], customers: [] }),
  action
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return prevState.set("isLoading", true);
    case GET_PRODUCTS_SUCCESS:
      return prevState
        .set("isLoading", false)
        .set("products", fromJS(action.products));

    case SALE:
      let index = prevState.products.findIndex(p => p.id === action.id);
      let newProduct = { ...prevState.products[index] };
      newProduct.stock--;
      prevState.products[index] = newProduct;
      return { ...prevState, products: [...prevState.products] };

    default:
      return prevState;
  }
}
