function firstChar(text) {
	let c=0
	for(let i=0;i<text.length;i++)
		{
			if(text.charAt(i)===' ')
				c++
		}
	if(c==text.length)
		return "''"
	else if(text.length==0)
		return "''"
    else
	{
		return (text.trim()).charAt(0)
	}
  // your code here
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
