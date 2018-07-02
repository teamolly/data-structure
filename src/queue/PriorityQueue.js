import util from "./../util/util";
export default class PriorityQueue {
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
		return this.list.length <= 1;
	}

	clear()
	{
		this.list = [{priority: -1}];
	}
}

function createData($Obj)
{
	if (!(util.typeOf($Obj) === "object"))
	{
		$Obj = {data: $Obj}
	}
	var d = {};
	d.id = "";
	d.priority = 0;
	d.data = {};
	d.update = updateData.bind(d);
	d.update($Obj);
	return d;
}

function updateData($Obj)
{
	$Obj.hasOwnProperty("id") && (this.id = $Obj.id);
	$Obj.hasOwnProperty("priority") && (this.priority = $Obj.priority);
	$Obj.hasOwnProperty("data") && (this.data = $Obj.data);
}






