import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

// In your test file
const showAlertMock = jest.fn();

// Render the App component and pass showAlertMock as a prop
<AppComponent showAlert={showAlertMock} />

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  // Additional test cases...

});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} showAlert={() => {}} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it("checks that showAlert function is called", () => {
    const showAlertMock = jest.fn();
    const wrapper = mount(<App showAlert={showAlertMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(showAlertMock).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('checks that showAlert is called with "Logging you out"', () => {
    const showAlertMock = jest.fn();
    const wrapper = mount(<App showAlert={showAlertMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(showAlertMock).toHaveBeenCalledWith("Logging you out");
    wrapper.unmount();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
