const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.pushItem(1);
    expect(stack.topItem()).toEqual(1);
  });
  // add more tests here...
  it("#push fox to stack", () => {
    const stack = new Stack();
    stack.pushItem("fox");
    expect(stack.topItem()).toEqual("fox");
  });
});
