/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App component", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it("should render Header, Login, and Footer components by default", () => {
    const component = shallow(<App />);
    expect(component.containsAllMatchingElements([<Header />, <Login />, <Footer />])).toBe(true);
  });

  it("should not render Notifications component by default", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toBe(false);
  });

  it("does not render CourseList component if not logged in", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.containsMatchingElement(<CourseList />)).toBe(false);
  });

  it("renders CourseList component if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.containsMatchingElement(<CourseList />)).toBe(true);
    expect(component.containsMatchingElement(<Login />)).toBe(false);
  });
});

describe("Keyboard event tests", () => {
  it("calls logOut function when Ctrl + H is pressed", () => {
    const mockedLogOut = jest.fn();
    const wrapper = mount(<App logOut={mockedLogOut} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(mockedLogOut).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it("displays alert when Ctrl + H is pressed", () => {
    // Mock window.alert
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    // Test if alert was called with the correct message
    expect(mockAlert).toHaveBeenCalledWith("Logging you out");
    wrapper.unmount();
  });
  
});

describe("State tests", () => {
  it("has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("changes displayDrawer to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("changes displayDrawer to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });
});

describe("submit input on form", () => {
  it("verifies that after changing the value of the two inputs, the button is enabled", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("[name='email']").simulate("change", { target: { value: "test@example.com" } });
    wrapper.find("[name='password']").simulate("change", { target: { value: "password123" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});