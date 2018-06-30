import Stack from "./../../src/stack/Stack";

const stack = new Stack();

describe("test for stack", function () {
	it("stack length", function () {
		stack.push(1);
		stack.push(2);
		expect(2).toEqual(stack.size)
	});

	it("stack pop", function () {

	})

})