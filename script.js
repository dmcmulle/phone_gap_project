// FOLLOW THIS EXAMPLE TO EDIT/ADD FLASHCARDS
// var qAndAs = new Array(	"SET_TITLE"
//							"Question 1",
//							"Answer to Question 1",
//							"Question 2",
//							"Answer to Question 2" );
//							etc...
									
var qAndAs1 = new Array("How to Create Flash Cards",
						"Flash cards are simply defined in a String array in 'script.js' (in the root directory).",
						"They are stored in a JavaScript Array.  index[0] is the title of the set, and [1, 2], [3, 4] would be question 1 answer 1, question 2 answer 2 etc.",
						"Make sure to include all sets you want to appear visible inside the variable 'current_sets'.",
						"You can hide sets by excluding them from the current_sets variable as well.",
						"After you write the title of the set, the next element is the question...",
						"..and the next element is the answer!  This continues until you no longer need any more flash cards.",
						"Since these arrays are interpreted as HTML in the browser, you can add any elements that fit inside this 400x200px (Desktop) or 220x220px (Mobile).",
						"For example, you can add images under text, like so...<br><img class=\"flashImage\" src=\"http://www.marketingpilgrim.com/wp-content/uploads/2012/11/thumbs-up.jpg\" height=\"100\"");
						
var qAndAs2 = new Array("Trig Review",
						"What are the definitions of Trigonometric Functions of a Right Triangle?",
						"<img class=\"flashImage\" src=\"http://i.imgur.com/vR06P8j.png\"",
						"What are the Reciprocal Identities?",
						"<img class=\"flashImage\" src=\"http://i.imgur.com/5I0DGqL.png\"",
						"What are the double angle formulas?",
						"<img class=\"flashImage\" src=\"http://i.imgur.com/d3T4TCX.png\" height=\"100\"",
						"What are the half angle formulas?",
						"<img class=\"flashImage\" src=\"http://i.imgur.com/zKHzH7j.png\" height=\"100\"");

//Add all visible sets into this variable or it will not appear in the application						
var current_sets = new Array(qAndAs1, qAndAs2);

var current_flash_set_being_viewed = current_sets[0];

var currentIndex = 0;

function nextCardText()
{
	currentIndex++;
		
	if(currentIndex >= current_flash_set_being_viewed.length)
	{
		currentIndex = 1;
	}
	
	writeCard();
}

function getNumberSets()
{
	return current_sets.length;
}

function init()
{
	document.getElementById("current_sets_available").innerHTML = getNumberSets();
	var set_titles = "";
	for (var i=0;i < getNumberSets();i++)
	{ 
		set_titles += "</br></br><input type=\"button\" onClick=\"loadSet(" + i + ")\" value=\"" + current_sets[i][0] + "\"></input>"
	}
	document.getElementById("set_titles").innerHTML = set_titles;
}

function loadSet(_index)
{
	document.getElementById('flash_card').innerHTML = "<br/><br/><br/><br/>Press \"NEXT\" to begin!<br/><br/>";
	currentIndex = 0;
	current_flash_set_being_viewed = current_sets[_index];
	document.getElementById('flash_cart_html_title').innerHTML = current_flash_set_being_viewed[0];
	//location.href='flash_cards_main.html';
	document.getElementById('flash_cards').style.display = "inline";
	document.getElementById('selector').style.display = "none";
}

function goBack()
{
	document.getElementById('flash_cards').style.display = "none";
	document.getElementById('selector').style.display = "inline";
}

function previousCardText()
{
	currentIndex--;
		
	if(currentIndex < 1)
	{
		currentIndex = (current_flash_set_being_viewed.length - 1);
	}
	
	writeCard();
}

function writeCard()
{
	if(isEven())
	{
		document.getElementById("flash_card").innerHTML = "<br/><br/>Question: " + (parseInt(currentIndex/2) + 1) + "<br/><br/>" + current_flash_set_being_viewed[currentIndex] + "<br/><br/>";
	}
	else
	{
		document.getElementById("flash_card").innerHTML = "<br/><br/>Answer to Question " + (parseInt(currentIndex/2)) + ":<br/><br/>" + current_flash_set_being_viewed[currentIndex] + "<br/><br/>";
	}
}	
	
function isEven() 
{ 
	return ((currentIndex%2) == 1); 
}