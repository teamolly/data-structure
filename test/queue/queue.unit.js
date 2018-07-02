/**
 * Created by Administrator on 2018/7/2 0002.
 */
import Queue from "./../../src/queue/Queue";

describe("test for queue", function ()
{
	const queue = new Queue();
	it("queue size", function ()
	{
		queue.enqueue(1);
		queue.enqueue(2);
		expect(2).toEqual(queue.size);
		queue.clear();
	});

	it("queue peek", function ()
	{
		queue.enqueue(1);
		queue.enqueue(2);
		expect(1).toBe(queue.peek);
		queue.clear();
	});

	it("queue enqueue", function ()
	{
		queue.enqueue(1);
		expect(false).toBe(queue.isEmpty);
		queue.clear();
	});

	it("queue dequeue", function ()
	{
		queue.enqueue(1);
		queue.enqueue(2);
		var peek = queue.dequeue();
		expect(peek).toBe(queue.peek);
		expect(1).toEqual(queue.size);
		queue.clear();
	});

	it("queue clear", function ()
	{
		queue.enqueue(1);
		queue.enqueue(2);
		queue.clear();
		expect(true).toBe(queue.isEmpty);
	});
});