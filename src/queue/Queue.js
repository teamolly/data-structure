class Queue {
	constructor()
	{
		this.list = [];
	}

	enqueue($item)
	{
		this.list.push($item);
// 		this.list.unshift($item)
	}

	dequeue()
	{
		this.list.shift();
// 		this.list.pop();
	}

	get size()
	{
		return this.list.length;
	}

	get peek()
	{
		var length = this.list.length;
		if (length > 0)
		{
			return this.list[0]
		}
		return "";
	}

	get isEmpty()
	{
		return this.list.length;
	}

	clear()
	{
		this.list = [];
	}
}








