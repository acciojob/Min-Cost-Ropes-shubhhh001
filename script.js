function mincost(arr)
{ 
    let minCost=0;
	while(arr.length>1){
		arr.sort();
		let x=arr.shift();
		let y=arr.shift();

		let sum=x+y;
		mincost+=sum;
		arr.push(sum);
	}
	return minCost;
}

module.exports=mincost;
