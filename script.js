
var slideArray = document.getElementsByName('point');

var timerId = setInterval(function () {sliderDelayFunc()
}, 5000);
slideArray[0].checked = true;



function sliderDelayFunc()
{
	for (var i = 0; i < slideArray.length;i++) 
	{
		if( i < slideArray.length-1)
		{
			if(slideArray[i].checked)
			{
				slideArray[i+1].checked = true;
				
				break;
			}
		}
		else
			{
				slideArray[0].checked = true;
				break;
			}
	}
}
labels.onclick = function Stop()
{
clearInterval(timerId); 
timerId = setInterval(function () {sliderDelayFunc()
}, 5000);
}

menu.onclick = function myFunction()
{
	var x = document.getElementById('myTopnav');

	if(x.className ==="topnav")
	{
		x.className += " responsive";
	}
	else
	{
		x.className = "topnav";
	}
}