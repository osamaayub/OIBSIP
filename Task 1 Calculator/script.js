const OuputScreen=Document.getElementById('outputscreen');


function Display(num)
{
	OutputScreen.value+=num;
}

function Calculate()
{
	OuputScreen.value=eval(OutputScreen.value);
}
function Clear()
{
	OuputScreen.value=" ";
}
function Delete()
{
	OutputScreen.value.slice(0,-2);
}