/**************************************************** GLOBAL VARIABLES BEGIN ****************************************************/

var attempts = 0; // attempt count
var smileTable = document.querySelector('#smiletable'); 			// select the table from smile.html
var winOrLose = document.querySelector('#winlose');
var attemptCountDisplay = document.querySelector('#attemptcount');	//number of guessing attempts
attemptCountDisplay.innerHTML = "You have <span style='color:green;'>4</span> chances and <span style='color:red;'>10 seconds</span> to find the happy face ;)";
var randomTextArray = ['Try harder.', 'You can do this!', 'Don\'t stop now!']; // some encouraging messages ;D
var gameOver = false;												// gameOver boolean to check the status of the game. game over if true

/* PUTTING A HANDLE ON HTML HIGH SCORE ELEMENTS BEGIN*/
var htmlHigh1 = document.getElementById('high1');
var htmlHigh2 = document.getElementById('high2');
var htmlHigh3 = document.getElementById('high3');
/* PUTTING A HANDLE ON HTML HIGH SCORE ELEMENTS END*/

/*INITIALIZING COOKIES */
var playerHigh1 = getCookie('playerCookie1');
var highScore1 = getCookie('highScoreCookie1');
if (highScore1 == "") setCookie("highScoreCookie1", "5", 30);		// if the cookie is empty (ie first time loading), populate it so that we can compare later on
var playerHigh2 = getCookie('playerCookie2');
var highScore2 = getCookie('highScoreCookie2');
if (highScore2 == "") setCookie("highScoreCookie2", "5", 30);


var playerHigh3 = getCookie('playerCookie3');
var highScore3 = getCookie('highScoreCookie3');
if (highScore3 == "") { setCookie("highScoreCookie3", "5", 30);}
/*INITIALIZING COOKIES */

var stopTime = setTimeout(function terminate() {
		alert("TIME'S UP!");
		gameOver=true;
		attemptCountDisplay.innerHTML='You ran out of time :( Click on any face to try again'}, 10000);
/**************************************************** GLOBAL VARIABLES END ****************************************************/

/**************************************************** TABLE CREATION BEGIN ****************************************************/
var rowNum = 1; 									// the first row will carry this value
for(i=1; i<=4; i++){ 								// row creation loop
	var tr = document.createElement('tr'); 			// create a new table row element
	var imgr = document.createElement('img'); 		//c reate an image element

	/* set the source and attributes of our row images BEGIN */
	imgr.setAttribute('src', 'images/rhenna.jpg');
	imgr.setAttribute('id', rowNum ); 				// assign an id with the row number
	imgr.setAttribute('onclick', "winLose(this, this.id)");
	imgr.style.width = '150px';
	imgr.style.height = '150px';
	tr.appendChild(imgr); 							// append the image to the new row
   /* set the source and attributes of our row images END */

	for(var j = 1; j<4; j++){ 						//column creation loop (same logic as row creation)
		var imgc = document.createElement('img');
		imgc.setAttribute('src', 'images/rhenna.jpg');
		imgc.setAttribute('onclick', 'winLose(this, this.id)');
		imgc.id = rowNum + j; 						//each new image within the row is rowNum + j elements away 
		imgc.style.width = '150px';
		imgc.style.height = '150px';
		tr.appendChild(imgc); 						//append image to existing row with current rowNum
	}
	rowNum +=4; 									//start a new row with current rowNum + number of elements away (4 in this case)
	smileTable.appendChild(tr);
}
/**************************************************** TABLE CREATION END ****************************************************/

/* POPULATE HTML HIGH SCORE VALUES WHEN PAGE LOADS BEGIN */
if (playerHigh1 != "" && highScore1 != "") htmlHigh1.innerHTML = "Name: " + playerHigh1 + " | | Score: " + highScore1 + " attempt(s)";
if (playerHigh2 != "" && highScore2 != "") htmlHigh2.innerHTML = "Name: " + playerHigh2 + " | | Score: " + highScore2 + " attempt(s)";
if (playerHigh3 != "" && highScore3 != "") htmlHigh3.innerHTML = "Name: " + playerHigh3 + " | | Score: " + highScore3 + " attempt(s)";
/* POPULATE HTML HIGH SCORE VALUES WHEN PAGE LOADS BEGIN */

/**************************************************** FUNCTIONS BEGIN ****************************************************/

/* FUNCTIONS FROM W3 SCHOOLS BEGIN */
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/* FUNCTIONS FROM W3 SCHOOLS END */

function winLose(img, imgId){ //check to see whether or not the picture matches the random number
	if(gameOver) var playAgain = window.confirm('Would you like to play again?'); // if the game is over, ask the user to play again
	if(playAgain) location.reload();
	var randomNum = Math.floor(
	Math.random()*16) + 1;
	console.log(randomNum);
	console.log(playAgain);
	imgId = parseInt(imgId); 						//imgId is passed as a string. Convert it to int before comparing. Alternatively, can use == to compare as it disregards data date
			//create a random number from 1-16 to use as our test base
	var randomText = randomTextArray[
					Math.floor(
						Math.random()*randomTextArray.length)
					];
	/*console.log messages for testing purposes
	console.log("img id:" + imgId);
	console.log("random: " + randomNum);
	*/
				/********				logic when win			********/
	if(randomNum === imgId && img.class != 'sad' && gameOver==false){ // check if we have a match, and the click is not from an already sad image, and that the game is still running
		img.src = 'images/win.jpg';									  // alter image source
		winOrLose.innerHTML = 'win.';
		finalScore = ++attempts;
		attemptCountDisplay.innerHTML = 'Final Score: ' + finalScore +' attempts'; // display the final score
		gameOver = true; // to prompt player to play again
		clearTimeout(stopTime); //stop the running timer
		if(finalScore < parseInt(highScore1)) { 					//if player final score is higher than cached first place score, print score and set his cookie
			user = prompt("FIRST PLACE!!! What is your name?");
			setCookie('playerCookie1', user, 30);
			setCookie('highScoreCookie1', String(finalScore), 30);
			htmlHigh1.innerHTML = "Name: " + getCookie(playerCookie1) + "Score: " + getCookie(highScoreCookie1);
		} else if(finalScore < parseInt(highScore2)) { 			  // if player final score is less than score already cached in second place, he gets second place
			user = prompt("SECOND PLACE! What is your name?");
			setCookie('playerCookie2', user, 30);
			setCookie('highScoreCookie2', String(finalScore), 30);
			htmlHigh2.innerHTML = "Name: " + getCookie(playerCookie2) + "Score: " + getCookie(highScoreCookie2);
		} else if(finalScore < parseInt(highScore3)) { 			 // if player final score is less than already cached 3rd place, they get 3rd place
			user = prompt("THIRD PLACE! What is your name?");
			setCookie('playerCookie3', user, 30);
			setCookie('highScoreCookie3', String(finalScore), 30);
			htmlHigh3.innerHTML = "Name: " + getCookie(playerCookie3) + "Score: " + getCookie(highScoreCookie3);
		}


                  /********				logic when lose			********/
	} else if(img.class != "sad" && gameOver==false) { //if the image is not already sad and the game is still running
		if(attempts < 4) {
			attempts++;
			attemptCountDisplay.innerHTML = attempts + "/4 attempts. " + randomText;
			img.src = 'images/sad.jpg';
		    img.class = "sad";
		}console.log("attempts:" + attempts); //display tries here
		if(attempts == 3) attemptCountDisplay.innerHTML += " Last attempt remaining!"
		if(attempts == 4) {
			attemptCountDisplay.innerHTML = "You've used up all of your attempts. Click on any face to play again.";
			winOrLose.innerHTML = '<span style="color:red;">lose.</span>'; //you lose prompt
			gameOver = true;
			clearTimeout(stopTime); //stop the timeout counter
		}
	}
}
/**************************************************** FUNCTIONS END ****************************************************/
