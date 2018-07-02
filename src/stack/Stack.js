export default class Stack {
	constructor()
	{
		this.list = [];
	}

	push($item)
	{
		this.list.push($item);
// 		this.list.unshift($item)
	}

	pop()
	{
		this.list.pop();
// 		this.list.shift();
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
			return this.list[length - 1]
		}
		return "";
	}

	get isEmpty()
	{
		return !!this.list.length;
	}

	clear()
	{
		this.list = [];
	}
}








