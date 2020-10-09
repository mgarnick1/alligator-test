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

it("renders correctly with different data", async () => {
  const wrapper = mount(App);
  wrapper.setData({ x1: 5, x2: 10 });
  await wrapper.vm.$nextTick();
  expect(wrapper.text()).toContain("10");
});

it("button click without correct sum", () => {
  const wrapper = mount(App);
  expect(wrapper.vm.message).toBe("");
  const button = wrapper.find("button");
  button.trigger("click");
  expect(wrapper.vm.message).toBe("Try Again");
});
