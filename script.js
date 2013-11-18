// FOLLOW THIS EXAMPLE TO EDIT/ADD FLASHCARDS
// var qAndAs = new Array(	"Question 1",
//							"Answer to Question 1",
//							"Question 2",
//							"Answer to Question 2" );
						
						
var qAndAs = new Array(	"What are the definitions of Trigonometric Functions of a Right Triangle?",
						"<img class=\"flashImage\" src=\"http://i.imgur.com/vR06P8j.png\"",
						"What are the Reciprocal Identities?",
						"<img class=\"flashImage\" src=\"http://i.imgur.com/5I0DGqL.png\"",
						"Who's the greatest programming teacher of all?",
						"Andy Harris (Of course)!",
						"This is the last question you know!",
						"Great!  Push 'NEXT' to go through again!" );

var currentIndex = -1;

function nextCardText()
{
	currentIndex++;
		
	if(currentIndex >= qAndAs.length)
	{
		currentIndex = 0;
	}
	
	writeCard();
}

function previousCardText()
{
	currentIndex--;
		
	if(currentIndex < 0)
	{
		currentIndex = (qAndAs.length - 1);
	}
	
	writeCard();
}
	
function writeCard()
{
	if(isEven())
	{
		document.getElementById("flash_card").innerHTML = "<br/><br/>Question: " + (parseInt(currentIndex/2) + 1) + "<br/><br/>" + qAndAs[currentIndex] + "<br/><br/>";
	}
	else
	{
		document.getElementById("flash_card").innerHTML = "<br/><br/>Answer to Question " + (parseInt(currentIndex/2) + 1) + ":<br/><br/>" + qAndAs[currentIndex] + "<br/><br/>";
	}
}	
	
function isEven() 
{ 
	return ((currentIndex%2) == 0); 
}