(function () {
    // To hold rankings
	var rankingStore = [];

    // Object Constructor for Player - name, score
    function Player(name, score) { 
        this.name = name;
        this.score = score;
    }

    // Validation to check whether there was input and whether or not it has a comma
    function validateInput() {
    	if($("#ranking-entry") === ""){
    		$("#errors").replaceWith("<div id=\"errorsOn\" class=\"errorsOn\">Name and Score input is required.  Please enter data and try again.</div>");
    	}
    	else{
    		if(document.getElementById("ranking-entry").value.indexOf(',') === -1){
    			$("#errors").replaceWith("<div id=\"errorsOn\" class=\"errorsOn\">You must include both a name and a score.  Please resubmit your data with a comma separating the values.</div>");
    		}
    		else{
    			$("#errors").replaceWith("<div id=\"errors\" class=\"errors\"></div>")
    			addRankings();
    		}
    	}
    }

    // Validates the separated parts of the input
    function validateParts(array){
    	$("#errors").replaceWith("<div id=\"errors\" class=\"errors\"></div>");
    	if(!/^[a-z]+$/.test(array[0])){
    		$("#errors").replaceWith("<div id=\"errorsOn\" class=\"errorsOn\">Names can only contain letters (A-Z, a-z).  Please enter the name without any special characters.</div>");
    		return true;
    	}
    	else{
    		if(!/^[0-9]+$/.test(array[1])){
    			$("#errors").replaceWith("<div id=\"errorsOn\" class=\"errorsOn\">Score can only contain numbers.  Please enter a score with only numbers 0-9.</div>");
    		return true;
    		}
    		else
    			return false;
    	}
    }

    // Clears what is stored in the ranking store for next use
    function clearRankingStore(){
        if ($("#rankedScores").has("li").length ){
            $( "#rankedScores li" ).remove();
        }
        rankingStore.length = 0;
    }

    // Clears the ranking entry item for more entries
    function clearRankingEntry(){
        document.getElementById("ranking-entry").value = '';
    }

    // Capitalizes the name in the list if they are not already
    function capitalizeName(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    // Adds rankings to the list
    function addRankings(){      
        var parts = document.getElementById("ranking-entry").value.split(", ");
        if (!validateParts(parts)){
	        var name = capitalizeName(parts[0]);
	        var score = parseInt(parts[1]);
	        var existingPerson = false;
	        
	        // If player already exists, update their score.
	        for (var i = 0; i < rankingStore.length; i++) {
	            if (rankingStore[i].name === name) {
	                rankingStore[i].score += score;
	                existingPerson = true;
	                break; 
	                }
	            }     
	        
	        // If player is new, create a new player object
	        if (!existingPerson) {
	            var newPlayer = new Player(name, score);
	            rankingStore.push(newPlayer);
	        }
	    }
        // Cleans up after adding entry
        clearRankingEntry();
        displayRankings();
    }

    // Sorts the rankings list in order of score
    function sortList() {
        rankingStore.sort(function(x, y) {
            return y.score - x.score;
        });
    }

    // Displays the rankings on the page
    function displayRankings() {
    
        sortList();
        
        // Change to an ordered list
        $("#rankedScores").replaceWith("<ol id=\"rankedScores\">");
    
        // Remove any previous list items
        if($("#rankedScores").has("li").length ) {
            $("#rankedScores li").remove();
        }
        
        for (var i = 0; i < rankingStore.length; i++) {
        	var list = document.getElementById("rankedScores");
	        if (1 == rankingStore.indexOf(rankingStore[i])){
	        	var li = document.createElement("li");
	        }
	        else{
	        	var li = document.createElement("li class=\"no-increment\"")
	        }
	     }

        // Add each player to the list
        /*for (var i = 0; i < rankingStore.length; i++) {
            var list = document.getElementById("rankedScores");
            if (i > 1){
	            if (rankingStore[i].score == rankingStore[i-1].score){
	            	var li = document.createElement("li class=\"no-increment\"")
	            }
	            if (rankingStore[i].score == rankingStore[i+1].score){
	            	var li = document.createElement("li class=\"no-increment\"")
	            }
	            else {
	            	var li = document.createElement("li");
	            }
	        }
	        else {
	            	var li = document.createElement("li");
	            }*/
            var points = ((rankingStore[i].score == 1) ? "pt" : "pts"); 
            var node = document.createTextNode(rankingStore[i].name + ", " + rankingStore[i].score + " " + points);   
            list.appendChild(li).appendChild(node);
        }
    }
    
    // Event listeners 
    $(document).bind('keypress', function(e) {
       if(e.which === 13) { 
          $('#submit').trigger('click');
       }
    });
    $('#submit').click(validateInput);
    $('#clear').click(clearRankingStore).click(clearRankingEntry);
})();