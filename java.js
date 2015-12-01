$(".project2").hide()
$(".project3").hide()
$(".project4").hide()

console.log('javascript working')

image1="./images/quizapp.png"
image2="./images/quizapp2.png"
image3="./images/quizapp3.png"

var step = 2
var killswitch
$(".project1").hover(function() {
	killswitch = setInterval(function(){
		$("#slide").attr("src", eval("image"+step))
		if (step<3){
			step++
		} else {
			step=1
		}
	}, 2000)
},
function() {
	clearInterval(killswitch);
})