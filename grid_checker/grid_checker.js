$(function(){
	console.log("jQuery fired");
	grid = [[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
	[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
	[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
	[52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
	[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
	[24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
	[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
	[67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
	[24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
	[21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
	[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
	[16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
	[86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
	[19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
	[04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
	[88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
	[04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
	[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
	[20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
	[01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]];

	function display_grid(grid) {
		// This displays the grid with a class of grid and a class of grid[i][j]
		for (var i=0; i<grid.length; i++) {
			var new_div = $("<div class='row-div'>")
			var new_row = $("<ul class='row row"+i+"'>")
			for (var j=0; j<grid[i].length; j++) {
				// If you just do toString on 01 it will only give you 1 so this will account for it
				// for all cases except when i < 10 but it doesnt matter
				if (j.toString().length==1){
					var new_element = $("<li class='grid grid"+i.toString()+"0"+j.toString()+"'>");
				} else if (i.toString().length==1) { 
					var new_element = $("<li class='grid grid"+"0"+i.toString()+j.toString()+"'>");
				}else {
					var new_element = $("<li class='grid grid"+i.toString()+j.toString()+"'>");
				}
				var value = grid[i][j];
				if (value.toString().length < 2) {
					value = '0' + value.toString()
				}
				new_element.text(value);
				new_row.append(new_element);
			}
			new_div.append(new_row)
			$(".numbers-grid").append(new_div);
			$(".numbers-grid").append($("<br>"))
		}
	}			

	display_grid(grid);

	function check_up_and_down(grid) {
		var largest_number = 0;
		var largest_array = []
		var store = 0;
		var i=3;
		var j=-1;
		upNDownInterval = setInterval(function() {
			if (j==19 && i==19){
				clearInterval(upNDownInterval);
			} else if (j==19){
				i++;
				j=0;
			} else {
				j++;
			}
			
			if (j.toString().length==1){
				console.log("i: " + i.toString());
				console.log("j: 0"+j.toString());
				console.log("");
				var first  = $(".grid"+i.toString()+"0"+j.toString()).css("color","red");
				var second = $(".grid"+(i-1).toString()+"0"+j.toString()).css("color","red");
				var third  = $(".grid"+(i-2).toString()+"0"+j.toString()).css("color","red");
				var fourth = $(".grid"+(i-3).toString()+"0"+j.toString()).css("color","red");
			} else if (i.toString().length==1) {
				console.log("i: 0"+i.toString())
				console.log("j: " + j.toString())
				console.log("");
				var first  = $(".grid"+"0"+i.toString()+j.toString()).css("color","red");
				var second = $(".grid"+"0"+(i-1).toString()+j.toString()).css("color","red");
				var third  = $(".grid"+"0"+(i-2).toString()+j.toString()).css("color","red");
				var fourth = $(".grid"+"0"+(i-3).toString()+j.toString()).css("color","red");
			} else {
				console.log("i: " + i.toString());
				console.log("j: " + j.toString());
				console.log("");
				if (i==10){
					var first  = $(".grid"+i.toString()+j.toString()).css("color","red");
					var second = $(".grid"+"0"+(i-1).toString()+j.toString()).css("color","red");
					var third  = $(".grid"+"0"+(i-2).toString()+j.toString()).css("color","red");
					var fourth = $(".grid"+"0"+(i-3).toString()+j.toString()).css("color","red");
				} else if (i==11) {
					var first  = $(".grid"+i.toString()+j.toString()).css("color","red");
					var second = $(".grid"+(i-1).toString()+j.toString()).css("color","red");
					var third  = $(".grid"+"0"+(i-2).toString()+j.toString()).css("color","red");
					var fourth = $(".grid"+"0"+(i-3).toString()+j.toString()).css("color","red");
				} else if (i==12) {
					var first  = $(".grid"+i.toString()+j.toString()).css("color","red");
					var second = $(".grid"+(i-1).toString()+j.toString()).css("color","red");
					var third  = $(".grid"+(i-2).toString()+j.toString()).css("color","red");
					var fourth = $(".grid"+"0"+(i-3).toString()+j.toString()).css("color","red");
				} else {
					var first  = $(".grid"+i.toString()+j.toString()).css("color","red");
					var second = $(".grid"+(i-1).toString()+j.toString()).css("color","red");
					var third  = $(".grid"+(i-2).toString()+j.toString()).css("color","red");
					var fourth = $(".grid"+(i-3).toString()+j.toString()).css("color","red");
				}
			}

			store = first.text()*second.text()*third.text()*fourth.text();
			if (store > largest_number) {
				$(".largest").css("color","black");
				$(".largest").removeClass("largest");
				first.addClass("largest");
				second.addClass("largest");
				third.addClass("largest");
				fourth.addClass("largest");
				largest_number = store;
			} else {
				setTimeout(function() {
					if (!first.hasClass("largest")) first.css('color','black');
					if (!second.hasClass("largest")) second.css('color','black');
					if (!third.hasClass("largest")) third.css('color','black');
					if (!fourth.hasClass("largest")) fourth.css('color','black');
				}, 800)
			}
		},200)
	}

	function main(grid) {
		down = check_up_and_down(grid);
	}
	main(grid);

})