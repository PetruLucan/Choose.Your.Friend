var firstPage = document.getElementById("frontPage")
var chooseBtn = document.getElementById("choose")
var secondPage = document.getElementById("scndPage")
var randomFacts = document.getElementById("facts")
var funFacts = [
    "You can lower your blood pressure just by petting your pup!",
    'Corgi is Welsh for "dwarf dog".',
    "The reason dogs curl up is because of an age-old instinct to keep themselves warm and to protect vital organs while they sleep.",
    "Anything smelly your dog rolls in only smells gross to you--to them it's DIVINE.",
    "Dogs have wet noses because it helps to absorb scent chemicals.",
    "If you leave your dog a piece of clothing that smells like you, the scent will comfort them and it can help curb their separation anxiety.",
    "The basenji is the only breed of dog that can't bark, but they can yodel!",
    "If a guy has a dog with him, he's three times more likely to get a girl's phone number.",
    "Bloodhounds are able to trace scents that are over 300 hours old.",
    " When your dog spins in a circle before settling down to snuggle, it's because he's making himself at home! This is a nesting trait carried down from your dog's wilder ancestors.",
    "Dalmatian puppies are born completely white and develop their spots over time!",
    "The Beatles included a whistle that is only audible to dogs in the song 'A Day in the Life.'",
    "Dogs can recognize more than 150 words.",
    "Puppies love games such as hide and seek! Hide, then call your pup's name so she can try to find you.",
    "Dogs who bark the most: Miniature Schnauzers, Cairn Terriers, Yorkshire Terriers, Fox Terriers and West Highland White Terriers.",
    "The best age to bring a puppy home is 8 to 12 weeks.",
    "Dogs are pack animals -- they don't enjoy being alone.",
    "Petting a dog can lower your blood pressure.",
    "The Basenji is the only barkless dog.",
    "Dogs are direct descendants of wolves.",
    "With love and a little patience, dogs can learn to walk backwards, salute and bow.",
];



chooseBtn.addEventListener("click", onClick)

function onClick(){
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden")
    nextBtn.classList.remove("hidden")
    addResult()
}
addFacts()
function addFacts(){
    function getRandomIndex(funFacts) {
        return Math.floor(Math.random() * funFacts.length);
      }
      
      for (var i = 0; i < 2; i++) {
        var randomFact = funFacts.splice(getRandomIndex(funFacts), 1);
    randomFacts.innerHTML += "<p>" + randomFact + "</p>";
}

}




