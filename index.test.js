const { Stack } = require("./index.js");
describe("Stack Class", () => {
  // it("#push should add a new item to the stack ", () => {
  //   const stack = new Stack();
  //   stack.pushItem(1);
  //   expect(stack.topItem()).toEqual(1);
  // });
  // add more tests here...
  it("#push fox to stack", () => {
    const stack = new Stack([]);
    stack.pushItem("fox");
    expect(stack.readableList).toEqual("fox");
  });

  it("return an array in reverse using Stack", () => {
    const stack = new Stack([12, 13, 14]);
    const stackTwo = new Stack([]);
    stack.removeLast(14);
    stackTwo.pushItem("14");
    stack.removeLast(13);
    stackTwo.pushItem("13");
    stack.removeLast(12);
    stackTwo.pushItem("12");
    expect(stackTwo.readableList).toEqual(["14,13,12"]);
    // let reverseArray = (arr) => {
    //   //Temp stack

    // for (let i = 0; i < stack.length; i--) {
    //   stack[i] = stack.removeItem();
    // }

    // for (let i = 0; i < stack.length; i++) {
    //   stack.pushItem(stack[i]);
    // }

    expect(stack.readableList).toEqual("14,13,12");
  });
});
