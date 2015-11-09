$(function() {
	console.log('jquery working');

	// Need to set a timer
	// ANd set a button to start the game
	// And a scoreboard
	$(".container").append("<div id='scoreboard'>"+0+"</div>")
	$(".container").append("<div id='start-game'><div id='start-words'>Start game</div></div>")

	// This is to create a duck at 450px down and a random
	// x coordinate
	var score = 0;
	function createDuck(xCoord){
		var startY = 450;
		var duck = $("<div class='duck'></div>")
		var w = window.innerWidth;
		var startX = Math.random()*w;
		duck.css('top', startY)
		duck.css('right', startX)
		// Makes the duck flap
		setInterval( function() {
      duck.toggleClass('flap');
    }, 250)
    if (startX >= w/2){
			setInterval(function() {
				startY -= 50;
				startX -= 50;
	      duck.css("top", startY);
	      // Going to move the opposite side of the screen
	      duck.css('right', startX)
	    }, 500)
		} else {
			setInterval(function() {
				startY -= 50;
				startX += 50;
	      duck.css("top", startY);
	      // Going to move the opposite side of the screen
	      duck.css('right', startX)
	    }, 500)			
		}
		$(".container").append(duck)


		duck.on('click', function(e) {
			console.log('click')
			duck.remove()
			
			score += 1
			$("#scoreboard").text(score)
			console.log(score)
		})
	}


	// Adding functionality to the button to call the fucntion
	// start game
	$('#start-game').on('click', function(event) {
		startGame();
	})

	function startTimer() {
		console.log('start the timer')
		setInterval(function() {
			var currentTime = $('#time');
			incrementedTime = parseInt(currentTime.text()) + 1
			currentTime.text(incrementedTime)
		}, 1000);
	}

	function releaseTheDucks() {
		setInterval(function(e) {
			createDuck();
		}, 1000)
	}

	function startGame() {
		console.log('button worked')
		$('#start-game').remove()
		releaseTheDucks();
		startTimer();
	}


	function crossHair(){

	}

})