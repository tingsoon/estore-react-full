import React from "react";
import ProductListItem from "./ProductListItem";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("Product List Item", () => {
  let wrapper, product, onSale;
  beforeEach(() => {
    product = { id: 100, title: "p1", price: 20, stock: 20 };
    wrapper = shallow(<ProductListItem product={product} onSale={onSale} />);
    onSale = jest.fn();
  });

  it("should have props", () => {
    console.log(
      wrapper
        .find("h2")
        .at(1)
        .props().children
    );
    expect(wrapper.find("h2").length).toEqual(2);
    expect(
      wrapper
        .find("h2")
        .at(1)
        .props().children
    ).toEqual(20);
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(onSale).toBeCalledTimes(1);
    expect(onSale).toBeCalledWith(100);
  });

  it("should have snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
