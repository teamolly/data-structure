import Stack from "./../../src/stack/Stack";

describe("test for stack", function ()
{
	const stack = new Stack();
	it("stack size", function ()
	{
		stack.push(1);
		stack.push(2);
		expect(2).toEqual(stack.size);
		stack.clear();
	});

	it("stack peek", function ()
	{
		stack.push(1);
		stack.push(2);
		expect(2).toBe(stack.peek);
		stack.clear();
	});

	it("stack pop", function ()
	{
		stack.push(1);
		stack.push(2);
		var peek = stack.pop();
		expect(peek).toBe(stack.peek);
		expect(1).toEqual(stack.size);
		stack.clear();
	});

	it("stack clear", function ()
	{
		stack.push(1);
		stack.push(2);
		stack.clear();
		expect(true).toBe(stack.isEmpty);
	});
});