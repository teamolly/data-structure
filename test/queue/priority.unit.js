/**
 * Created by Administrator on 2018/7/2 0002.
 */
import PriorityQueue from "./../../src/priorityQueue/PriorityQueue";

describe("test for priorityQueue", function ()
{
	const priorityQueue = new PriorityQueue();
	it("priorityQueue size", function ()
	{
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		priorityQueue.enqueue({priority: 3});
		expect(3).toEqual(priorityQueue.size);
		priorityQueue.clear();
	});

	it("priorityQueue peek", function ()
	{
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		priorityQueue.enqueue({priority: 3});
		expect(3).toBe(priorityQueue.peek.priority);
		priorityQueue.clear();
	});

	it("priorityQueue enqueue", function ()
	{
		priorityQueue.enqueue(1);
		expect(false).toBe(priorityQueue.isEmpty);
		priorityQueue.clear();
	});

	it("priorityQueue dequeue", function ()
	{
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		var peek = priorityQueue.dequeue();
		expect(peek).toBe(priorityQueue.peek);
		expect(1).toEqual(priorityQueue.size);
		priorityQueue.clear();
	});

	it("priorityQueue clear", function ()
	{
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		priorityQueue.clear();
		expect(true).toBe(priorityQueue.isEmpty);
	});
});