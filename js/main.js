var rankingEntry = $('#ranking-entry');
var ranking = [];

// Player Object Construct - holds name and score
function Player(name, score) {
	this.name = name;
	this.score = score;
}

// Add a ranking from form submit
function addRankings() {
	// Split multiple rankings at the semi-colon
	var splitRanking = document.getElementByID('ranking-entry').value.split('; ');

	// Split each ranking at the comma - name and score
	for (var i = 0; i < splitRanking.length; i++){
		var splitRanking[i] = splitRanking[i].split(', ');
	}
	// var splitRanking = document.getElementByID('ranking-entry').value.split(", ");

	// Take name and capitalize the first letter
	var properName = "";
	for (var i = 0; i < splitRanking.length; i++){
		capitalizeName(splitRanking [i][0]);
	} 

	// Take string from input after comma and make int
	for (var i = 0; i < splitRanking.length; i++){
		parseInt[splitRanking [i][1]];
	}

	// Check if user is new or not, add score if not
	var exists = false;
		for (var i = 0; i < splitRanking.length; i++){
			for (var j = 0; j < ranking.length; j++){
				if(ranking[j].name === splitRanking[i][0]){
					ranking[j].score += splitRanking[i][1];
					exists = true;
					break;
				}
				if (!exists){
					var newbie = new Player(name, score);
					ranking.push(newbie);
				}
			}
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
function capitalizeName(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
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