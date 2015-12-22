console.log('javascript working')

// This is the slideshow for the quiz application
var quizImage1 = "./images/quizapp.png";
var quizImage2 = "./images/quizapp2.png";
var quizImage3 = "./images/quizapp3.png";

var quizStep = 2;
var quizKillSwitch;
$(".p1-image").hover(function() {
	console.log("quiz hover")
	quizKillSwitch = setInterval(function(){
		$("#quizSlide").attr("src", eval("quizImage"+quizStep));
		if (quizStep<3){
			quizStep++;
		} else {
			quizStep=1;
		}
	}, 2000);
},
function() {
	console.log("kill quiz")
	clearInterval(quizKillSwitch);
});


// This is the slideshow for the gym applications
var gymImage1 = "./images/gymApp1.png";
var gymImage2 = "./images/gymApp2.png";
var gymImage3 = "./images/gymApp3.png";

var gymStep = 2;
var gymKillSwitch;
$(".p2-image").hover(function() {
	console.log("yolo")
	gymKillSwitch = setInterval(function(){
		$("#gymSlide").attr("src", eval("gymImage"+gymStep));
		if (gymStep<3){
			gymStep++;
		} else {
			gymStep=1;
		}
	}, 2000);
},
function() {
	clearInterval(gymKillSwitch);
});



// This is the slideshow for the gym applications
var mattsForumImage1 = "./images/mattsforum1.png";
var mattsForumImage2 = "./images/mattsforum2.png";

var mattsForumStep = 2;
var mattsForumKillSwitch;
$(".p3-image").hover(function() {
	console.log("yolo")
	mattsForumKillSwitch = setInterval(function(){
		$("#forumSlide").attr("src", eval("mattsForumImage"+mattsForumStep));
		if (mattsForumStep<2){
			mattsForumStep++;
		} else {
			mattsForumStep=1;
		}
	}, 2000);
},
function() {
	clearInterval(mattsForumKillSwitch);
});
