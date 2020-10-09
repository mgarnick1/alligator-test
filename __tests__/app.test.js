/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App", () => {
  it("has data", () => {
    expect(typeof App.data).toBe("function");
  });
});

describe("Mounted App", () => {
  const wrapper = mount(App);

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe("input exists", () => {
  const wrapper = mount(App);

  test("input exists", () => {
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
  });
});

describe("ensure correct h3 text", () => {
  test("render h3 lets test your arithmetic", async () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toMatch(/Let us test your arithmetic./i);
  });
});
