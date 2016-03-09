var rankingEntry = $('#ranking-entry');
var ranking = [];

// Player Object Construct - holds name and score
function Player(name, score) {
	this.name = name;
	this.score = score;
}

// Add a ranking from form submit
function addRankings() {
	// Split the ranking at the comma
	var splitRanking = document.getElementByID('ranking-entry').value.split(", ");
	
	// Take name and capitalize the first letter
	var properName = capitalizeName(splitRanking [0]);

	// Take string from input after comma and make int
	var properScore = parseInt[splitRanking [1]];

	// Check if user is new or not, add score if not
	var exists = false;
	for (var i = 0; i < ranking.length; i++){
		if(ranking[i].name === properName)
		{
			ranking[i].score += score;
			exists = true;
			break;
		}
	}
	if (!exists){
		var newbie = new Player(name, score);
		ranking.push(newbie);
	}
	// Clear work done by adding rankings
	clearRankingEntry();
    displayRankings();
}

// Clears the ranking-entry field - addRanking Helper
function clearRankingEntry() {
        document.getElementById("ranking-entry").value = '';
    }

// Capitalize the first letter of name in entry - addRanking Helper
function capitaliseName(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Hey, Listen! - event listeners
$(document).bind('keypress', function(e) {
       if(e.which === 13) { 
          $('#submit').trigger('click');
       }
    });
$('#submit').click(addRankings);
$('#clear').click(function () {
		$('#rankings').empty();
		ranking = [];
});