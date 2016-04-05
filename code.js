var size = 500;
var pixelSize = 50;
var iter = Math.floor(size/pixelSize);

var game = document.getElementById('game');
var pixel;
var matrix = [];
var queue = [];
var direction = "left";

function init() {
	for (var i=0; i < iter; i++) {
		matrix[i] = [];
		for (var j=0; j < iter; j++) {
			matrix[i][j] = 0;
			pixel = document.createElement('div');
			pixel.className = 'pixel';
			pixel.id = ["p", i, j].join("-");
			game.appendChild(pixel);
		}
	}
	for (j = 2; j < 6; j++) {
		queue.push({
			i: 3,
			j: j
		});
	}
}


function draw() {
	for (var i=0; i < iter; i++) {
		for (var j=0; j < iter; j++) {
			document.getElementById(["p", i, j].join("-")).style.backgroundColor = "yellow";
		}
	}
	queue.forEach(function(node){
		document.getElementById(["p", node.i, node.j].join("-")).style.backgroundColor = "red";
	});
}

function state() {
	switch(direction) {
		case "left":
			queue.forEach(function(node){
				node.j = node.j === 0 ? iter - 1 : node.j - 1;
			});
			break;
		case "up":
			break;
		case "down":
			break;
		case "right":
			break;
		default:
	}
}

function loop() {
	draw();
	state();
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    switch (charStr) {
    	case "w":
    		break;
    	case "a":
    		break;
    	case "s":
    		break;
    	case "d":
    		break;
    	default:
    }
};


init();

setInterval(loop, 100);




