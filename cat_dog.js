$(function() {
  renderCurrentImage();

  $("#cat").click(function() {
    checkGuess("cat");
    return false;
  });

  $("#dog").click(function() {
    checkGuess("dog");
    return false;
    });
});

var correctGuesses = 0;
var currentImage = 0;

var images = [ 
  { kind: "dog", src: "http://cdn-0.justdogbreeds.com/images/breeds/poodle.jpg" },
  { kind: "cat", src: "http://images.nationalgeographic.com/wpf/media-live/photos/000/708/cache/cat-declawing_70898_990x742.jpg" },
  { kind: "cat", src: "http://i.dailymail.co.uk/i/pix/2014/01/07/article-2535302-1A77B05400000578-616_634x558.jpg" },
  { kind : "dog", src: "http://www.afranko.net/wp-content/uploads/2013/11/b58e9ef87cde7ef96fb744e3eac940cb.jpg" },
  { kind: "cat", src: "http://www.catsofaustralia.com/images/sphynx-cat-2.jpg"  },
  { kind: "dog", src: "http://www.afranko.net/wp-content/uploads/2013/11/422d5c043f385f4d135c1ce8959a9114.jpg" },
  { kind: "dog", src: "http://media.salon.com/2013/02/shutterstock_73976878.jpg" }
]

function renderCorrectGuesses() {
  $("#correct-guesses").html(correctGuesses);
}

function renderCurrentImage() {
  $("img").prop("src", images[currentImage].src);
}

function currentKind() {
  return images[currentImage].kind;
}

function nextImage() {
  if (currentImage >= images.length -1) {
    currentImage = 0;
  } else {
    currentImage++
  }
  renderCurrentImage();
}

function checkGuess(kind) {
  if (kind === currentKind()) {
    correctGuesses++;
    renderCorrectGuesses();
  }
  nextImage();
}
