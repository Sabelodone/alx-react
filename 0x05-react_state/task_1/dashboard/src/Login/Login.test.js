import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("contains two input fields and two labels", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  describe("Submit Button", () => {
    it("is disabled by default", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
    });

    it("is enabled after changing the value of email and password fields", () => {
      const wrapper = shallow(<Login />);
      const emailInput = wrapper.find("[name='email']");
      const passwordInput = wrapper.find("[name='password']");
      
      emailInput.simulate("change", { target: { value: "test@example.com" } });
      passwordInput.simulate("change", { target: { value: "password123" } });

      expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
    });
  });
});
