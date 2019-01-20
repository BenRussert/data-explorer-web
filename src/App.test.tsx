import { mount } from "enzyme";
import * as React from "react";
import App from "./App";

describe("App Mounting", () => {
  const wrapper = mount<App>(<App />);
  it("renders without crashing", () => {
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, "onMetaDataChange");
    expect(wrapper).toBeDefined();
    expect(instance.onMetaDataChange).toBeDefined();
  });
});
