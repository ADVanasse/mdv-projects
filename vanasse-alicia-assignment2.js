


// Alicia Vanasse
// SDI 1501
// Jan. 15, 2015
//Project 2




//My Global Variables

aPrompt;
aConfirm;
var luDog = true;
var dogName = "Lulu";
var sheOld = 12;

// Procedure

youAre =function(aPrompt) {
	if (aPrompt === dogName || aPrompt === "Lulu") {
			console.log("How did you know?!");
		} else {
			console.log("That's insulting.");
		}
	};
	
	
// Boolean Function with While Loop

whatBreed = function(aConfirm, CoonHound) {
	var i = 10;
		while( i > 0) {
		i--;
			if (aConfirm === CoonHound) {
				console.log("She's actually a Treeing Walker CoonHound!");
				return aConfirm;
				} else {
				console.log("She looks nothing like one of those!");
				return aConfirm;
			};
		};
	};
			
			
// Number Function with For Loop

wereOld = function(age){
	for (var i = 0; i < 1; i++) {
		var together = age + sheOld;
		console.log("Oh, Lugirl, you'll be " + total + " pretty soon.....if you live that long.");
		return together;
	}; 
};

//String Function 

wordsAndWords =function (dogName, string) {
	var sheLoves = " snuggles"
	var putEmTogether = dogName + string + sheLoves;
	console.log(putEmTogether);
	return putEmTogether;
};



// My Main Code

//Prompt for Procedure

aPrompt = prompt("Can you guess my doggy's name? I bet you cant!!","");

// Call for Procedure

youAre(aPrompt);


// Confirm  for Boolean

aConfirm = confirm("What breed do you think she is?","OK for CoonHound, Cancel for Beagle");


// Call for Boolean Function

aConfirm = whatBreed(aConfirm, CoonHound);

// Call for Number Function

together = wereOld(12)

//Call for String Function

putEmTogether = wordsAndWords(dogName + " loves her some ");



// Return Values

console.log("The Boolean Function return value is " + aConfirm);
console.log("The Number Function return value is " + together);
console.log("The String return is " + putEmTogether);






