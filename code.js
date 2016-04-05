var size = 500;
var pixelSize = 50;
var iter = Math.floor(size/pixelSize);

var game = document.getElementById('game');
var pixel;
var matrix = [];
var queue = [];
var direction = "left";
var interval;

function init() {
	for (var i=0; i < iter; i++) {
		matrix[i] = [];
		for (var j=0; j < iter; j++) {
			matrix[i][j] = 0;
			pixel = document.createElement('div');
			pixel.className = 'pixel';
			pixel.id = ["p", i, j].join("-");
			pixel.innerHTML = i + "," + j;
			game.appendChild(pixel);
		}
	}
	for (j = 2; j < 8; j++) {
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
	console.log(JSON.stringify(queue));
}

function state() {
	switch(direction) {
		case "left":
			queue.pop();
			queue.unshift({
				i: queue[0].i,
				j: queue[0].j === 0 ? iter - 1 : queue[1].j - 1
			});
			break;
		case "up":
			queue.pop();
			queue.unshift({
				i: queue[0].i === 0 ? iter - 1 : queue[1].i - 1,
				j: queue[0].j
			});
			break;
		case "down":
			queue.pop();
			queue.unshift({
				i: queue[0].i === iter - 1 ? 0 : queue[1].i + 1,
				j: queue[0].j
			});
			break;
		case "right":
			queue.pop();
			queue.unshift({
				i: queue[0].i,
				j: queue[0].j === iter - 1 ? 0 : queue[1].j + 1
			});
			break;
		default:
	}
}

function loop() {
	draw();
	state();
	setTimeout(loop, 1000);
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    switch (charStr) {
    	case "w":
    		direction = "up";
    		break;
    	case "a":
    		direction = "left";
    		break;
    	case "s":
    		direction = "down";
    		break;
    	case "d":
    		direction = "right";
    		break;
    	default:
    }
};


init();
loop();



