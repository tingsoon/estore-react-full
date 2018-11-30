import productReducer from "./product";
import { fromJS } from "immutable";
import { GET_PRODUCTS_SUCCESS } from "../actionTypes/product";
describe("Product Reducer", () => {
  it("should return initial state", () => {
    const initialState = fromJS({
      products: [],
      offers: [],
      sales: [],
      customers: []
    });
    let newState = productReducer(undefined, { type: "INIT" });
    expect(newState).toEqual(initialState);
  });

  it("should return products on GET_PRODUCTS_SUCCESS", () => {
    const action = {
      type: GET_PRODUCTS_SUCCESS,
      products: [{ id: 1, title: "p1" }]
    };
    const newState = productReducer(undefined, action);
    expect(newState.get("products").size).toEqual(1);
  });
});
