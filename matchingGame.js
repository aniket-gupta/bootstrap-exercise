var numberOfFaces = 5;

function gameOver() {
	alert("GAME OVER");
	var body = document.getElementsByTagName("body")[0];
	body.onclick = null;
	var leftSide = document.getElementById("leftSide");
	leftSide.lastChild.onclick = null;
}

function generateFaces() {
	console.log("called");
	var leftSide = document.getElementById("leftSide");
	for(var i = 0; i < numberOfFaces; i++) {
		var img = document.createElement("img");
		img.src = "smile.png";
		img.style.top = Math.floor(Math.random() * 400);
		img.style.left = Math.floor(Math.random() * 400);
		img.style.position = "absolute";
		leftSide.appendChild(img);
	}
	var lastChild = leftSide.lastChild;
	var leftSideImages = leftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	var rightSide = document.getElementById("rightSide");
	rightSide.appendChild(leftSideImages);
	lastChild.onclick = function nextLevel(event) {
		event.stopPropagation();
		for (var node of leftSide.childNodes)
			leftSide.removeChild(node);
		for (var node of rightSide.childNodes)
			rightSide.removeChild(node);
		numberOfFaces += 5;
        generateFaces();
	};
}