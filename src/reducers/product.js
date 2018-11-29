import { GET_PRODUCTS } from "../actionTypes/product";

export default function productReducer(
  prevState = { products: [], offers: [], sales: [], customers: [] },
  action
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        products: [
          {
            id: 1,
            title: "iphone xs",
            price: 1800,
            stock: 20
          },
          {
            id: 2,
            title: "iphone xs max",
            price: 2000,
            stock: 20
          },
          {
            id: 3,
            title: "Pixel 3",
            price: 1200,
            stock: "20"
          }
        ]
      };
    default:
      return prevState;
  }
}
