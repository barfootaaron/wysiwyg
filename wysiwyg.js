var famousPeople = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Lorem ipsum dolor sit amet, nibh ut vel quam quam mauris lorem. At nulla molestie a mollis, vivamus quas.",
	  image: "images/images.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Actor",
	  name: "RoboCop",
	  bio: "Lorem ipsum dolor sit amet, nibh ut vel quam quam mauris lorem. At nulla molestie a mollis, vivamus quas.",
	  image: "images/robocop.png",
	  lifespan: {
	    birth: 1747,
	    death: 2090
	  }
	},
	{
	  title: "Actor",
	  name: "Monster",
	  bio: "Lorem ipsum dolor sit amet, nibh ut vel quam quam mauris lorem. At nulla molestie a mollis, vivamus quas.",
	  image: "images/monster.png",
	  lifespan: {
	    birth: 1747,
	    death: 2090
	  }
	},
	{
	title: "Actor",
	  name: "Zombie",
	  bio: "Lorem ipsum dolor sit amet, nibh ut vel quam quam mauris lorem. At nulla molestie a mollis, vivamus quas.",
	  image: "images/zombie.png",
	  lifespan: {
	    birth: 1747,
	    death: 2090
	  }
	},
	{
	title: "Actor",
	  name: "Steve Martin",
	  bio: "Lorem ipsum dolor sit amet, nibh ut vel quam quam mauris lorem. At nulla molestie a mollis, vivamus quas.",
	  image: "images/robocop.png",
	  lifespan: {
	    birth: 1747,
	    death: 2090
	  }
	},
	{
	title: "Actor",
	  name: "Tom Hanks",
	  bio: "Lorem ipsum dolor sit amet, nibh ut vel quam quam mauris lorem. At nulla molestie a mollis, vivamus quas.",
	  image: "images/monster.png",
	  lifespan: {
	    birth: 1747,
	    death: 2090
	  }
	}
]

var cardGrid = document.getElementById("cardGrid"); 
var bioCards = document.getElementsByClassName("bioCards");
var textInput = document.getElementById("textInput");
var bioText = document.getElementsByClassName("bioText");

for (var i=0; i<famousPeople.length; i++) {
	var currentTitle = famousPeople[i].title;
	var currentName = famousPeople[i].name;
	var currentBio = famousPeople[i].bio;
	var currentImage = famousPeople[i].image;
	var currentBirth = famousPeople[i].lifespan.birth;
	var currentDeath = famousPeople[i].lifespan.death;
	var card = `<article class="bioCards">
					<header>
						<h2 id=card${[i]}>${currentTitle}</h2>
						<h3>${currentName}</h3>		
					</header>
					<section class="bioText">
						<p>${currentBio}</p>
						<img src="${currentImage}"
					</section>
					<footer>
						<p>Born: ${currentBirth} Died: ${currentDeath}
					</footer>	 
				</article>`;
			cardGrid.innerHTML += card;		
}

for (var j=0; j<famousPeople.length; j++) {
	bioCards[j].addEventListener("click", addBorder);
	bioCards[j].addEventListener("click", addFocus);
}

function addBorder(event) {
	for (var k=0; k<famousPeople.length; k++) {
		bioCards[k].classList.remove("border");
	}
	textInput.value = "";
	this.classList.toggle("border");
}

function addFocus(event) {
	textInput.focus();
}

textInput.addEventListener("keyup", edit);

function edit(event) {
	for (var l=0; l<famousPeople.length; l++) {
		if (bioCards[l].classList.contains("border")) {
			bioText[l].childNodes[1].innerHTML = document.getElementById("textInput").value;
		}
	}
	if (event.keyCode == 13) {
		textInput.value = "";
	}
}























