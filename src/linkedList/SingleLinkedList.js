class SingleLinkedList {
	constructor()
	{
		this.head = null;
		this.length = 0;
	}

	append($element)
	{
		var node = new Node($element);
		if (!this.head)
		{
			this.head = node;
		}
		else
		{
			var current = this.head;
			while (current.next)
			{
				current = current.next;
			}
			current.next = node;
		}
		this.length++;
	}

	insert($position, $element)
	{
		if ($position < 0 || $position > this.length - 1)
		{
			return;
		}
		var index = 0;
		var previous = null;
		var node = new Node($element);
		var current = this.head;
		if ($position == 0)
		{
			node.next = this.head;
			this.head = node;
		}
		else
		{
			while (index++ < $position)
			{
				previous = current;
				current = current.next;
			}
			previous.next = node;
			node.next = current;
		}
		this.length++;

	}

	removeAt($position)
	{
		if ($position < 0 || $position > this.length - 1)
		{
			return;
		}
		var index = 0;
		var previous = null;
		var current = this.head;
		if ($position == 0)
		{
			this.head = current.next;
		}
		else
		{

			while (index++ < $position)
			{
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		current = null;
		this.length--;
	}

	remove($element)
	{
		if (this.head)
		{
			var current = this.head;
			if (current == $element)
			{
				this.head = current.next;
			}
			else
			{
				while (current && current != $element)
				{
					var previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			current = null;
			this.length--;
		}
	}

	get size()
	{
		return this.length;
	}

	get isEmpty()
	{

		return this.length == 0;
	}

	getIndexBy($element)
	{
		var index = 0;
		var current = this.head;
		while (current && current != $element)
		{
			current = current.next;
			index++;
		}
		if (index <= (this.length - 1))
		{
			return index;
		}
		return -1;
	}

	clear()
	{
		this.length = 0;
		this.head = null;
	}

}

class Node {
	constructor($element)
	{
		this.node = $element;
		this.next = null;
	}

	set next($element)
	{
		this.next = $element;
	}

	get next()
	{
		return this.next;
	}

}