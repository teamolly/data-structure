class PriorityQueue {
	constructor()
	{
		this.list = [{priority: -1}];
	}

	enqueue($item)
	{
		const itemData = createData($item);
		for (let item of this.list)
		{
			if (item.priority < itemData.priority)
			{
				const index = this.list.indexOf(item);
				this.list.splice(index, 0, itemData);
				break;
			}
		}
	}

	dequeue()
	{
		this.list.shift();
	}

	get size()
	{
		return this.list.length - 1;
	}

	get peek()
	{
		var length = this.list.length;
		if (length > 1)
		{
			return this.list[0]
		}
		return "";
	}

	get isEmpty()
	{
		return this.list.length > 1;
	}

	clear()
	{
		this.list = [{priority: -1}];
	}
}

function createData($Obj)
{
	var d = {};
	d.name = "";
	d.priority = 0;
	d.update = updateData.bind(d);
	d.update($Obj);
	return d;
}

function updateData($Obj)
{
	$Obj.hasOwnProperty("name") && (this.name = $Obj.name);
	$Obj.hasOwnProperty("priority") && (this.priority = $Obj.priority);
}






