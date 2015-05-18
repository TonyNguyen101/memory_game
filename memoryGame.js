var counter = {
	A: 0,
	B: 0,
	C: 0,
	D: 0,
	F: 0,
	G: 0,
	H: 0,
	I: 0,
};

// An object with links to our pictures
var pictures = {
	link: "url(http://i2.kym-cdn.com/photos/images/newsfeed/000/729/354/d7a.jpg)",
	mccloud: "url(http://i1.kym-cdn.com/photos/images/masonry/000/729/352/18d.jpg)",
	glados: "url(http://i1.kym-cdn.com/photos/images/masonry/000/729/011/466.jpg)",
	mario: "url(http://i3.kym-cdn.com/photos/images/masonry/000/729/006/a22.jpg)",
	jam: "url(http://i2.kym-cdn.com/photos/images/masonry/000/729/008/9c1.jpg)",
	garris: "url(http://i2.kym-cdn.com/photos/images/masonry/000/729/208/d82.jpg)",
	youngster: "url(http://i0.kym-cdn.com/photos/images/masonry/000/729/353/9ae.jpg)",
	valentine: "url(http://i3.kym-cdn.com/photos/images/masonry/000/729/355/5e7.jpg)",
};

// An array with those just those links, doubled and parred with each other. 
var pictureArray = [];
for (var prop in pictures) {
    pictureArray.push(pictures[prop]);
    pictureArray.push(pictures[prop]);
}

// Shuffle the pictureArray using Fister-Yates
function shuffle(array) {
  var m = array.length, temp, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }
  return array;
}
var mixedpictureArray = shuffle(pictureArray);

//Make a box for every <p>
var panel = document.querySelectorAll("p");

var backOfCard = "url(http://yangtx.com/wp-content/uploads/2014/10/business-cards-backgrounds-designs-tim-wright-designs---freelance-graphic-designer-gallery.jpg)";
//Make a function that will make the <p>'s blank
function drawFaceDown(){
	for (var i = 0; i < panel.length; i++) {
		panel[i].setAttribute('id', "box"+i);
		panel[i].style.backgroundImage = backOfCard;
		panel[i].addEventListener("click", function(){ 
			counter.A += 1;
			if (this.style.backgroundImage === backOfCard) {
					this.style.backgroundImage = mixedpictureArray.pop();
			}
		});
	}
}

function drawFaceUp(){
	for (var i = 0; i < panel.length; i++) {
		
		panel[i].addEventListener("click", function(){ 
			counter.A += 1;
			panel.style.backgroundImage = mixedpictureArray.pop();
		});
	}
}

drawFaceDown();
//drawFaceUp();

var picks = 0;
var firstPick;
var secondPick;
var matchesMadeCounter = 0;
var numberAttemptsMade = 0;


	




