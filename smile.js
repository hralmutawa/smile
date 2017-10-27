var attempts = 0;
var smileTable = document.querySelector('#smiletable'); // select the table from smile.html
var winOrLose = document.querySelector('#winlose');
var attemptCountDisplay = document.querySelector('#attemptcount');	//number of guessing attempts
attemptCountDisplay.innerHTML = "You have <span style='color:green;'>4</span> chances and <span style='color:red;'>10 seconds</span> to find the happy face ;)";
var randomTextArray = ['Try harder.', 'You can do this!', 'Don\'t stop now!']; // some encouraging messages ;D
var gameOver = false;								// gameOver boolean to check the status of the game. game over if true

	var stopTime = setTimeout(function terminate() {
		alert("TIME'S UP!");
		gameOver=true;
		attemptCountDisplay.innerHTML='You ran out of time :( Click on any face to try again'}, 10000);


/*TABLE CREATION */
var rowNum = 1; 									// the first row will carry this value
for(i=1; i<=4; i++){ 								// row creation loop
	var tr = document.createElement('tr'); 			// create a new table row element
	var imgr = document.createElement('img'); 		//c reate an image element

	/* set the source and attributes of our row images BEGIN */
	imgr.setAttribute('src', 'images/rhenna.jpg');
	imgr.setAttribute('id', rowNum ); 				// assign an id with the row number
	imgr.setAttribute('onclick', "winLose(this, this.id)");
	imgr.style.width = '200px';
	imgr.style.height = '200px';
	tr.appendChild(imgr); 							// append the image to the new row
   /* set the source and attributes of our row images END */

	for(var j = 1; j<4; j++){ 						//column creation loop (same logic as row creation)
		var imgc = document.createElement('img');
		imgc.setAttribute('src', 'images/rhenna.jpg');
		imgc.setAttribute('onclick', 'winLose(this, this.id)');
		imgc.id = rowNum + j; 						//each new image within the row is rowNum + j elements away 
		imgc.style.width = '200px';
		imgc.style.height = '200px';
		tr.appendChild(imgc); 						//append image to existing row with current rowNum
	}
	rowNum +=4; 									//start a new row with current rowNum + number of elements away (4 in this case)
	smileTable.appendChild(tr);
}
/*TABLE CREATION */

function winLose(img, imgId){
	if(gameOver) var playAgain = window.confirm('Would you like to play again?'); // if the game is over, ask the user to play again
	if(playAgain) location.reload();
	console.log(playAgain);
	imgId = parseInt(imgId); 						//imgId is passed as a string. Convert it to int before comparing. Alternatively, can use == to compare as it disregards data date
	var randomNum = Math.floor(
					Math.random()*16) + 1;
	console.log(randomNum);							//create a random number from 1-16 to use as our test base
	var randomText = randomTextArray[
					Math.floor(
						Math.random()*randomTextArray.length)
					];
	/*console.log messages for testing purposes
	console.log("img id:" + imgId);
	console.log("random: " + randomNum);
	*/

	if(randomNum === imgId && img.class != 'sad' && gameOver==false){ // check if we have a match, and the click is not from an already sad image, and that the game is still running
		img.src = 'images/win.jpg';									  // alter image source
		winOrLose.innerHTML = 'win.';
		finalScore = ++attempts;
		attemptCountDisplay.innerHTML = 'Final Score: ' + finalScore +' attempts'; // display the final score
		gameOver = true; //stop timeout counter
		clearTimeout(stopTime);
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
