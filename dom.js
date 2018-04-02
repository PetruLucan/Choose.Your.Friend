function log(x) {
    console.log(x);
}

var dogsImg = document.getElementById("img")
var dogsBreed = document.getElementById("breed")
var nextButton = document.getElementById("nextBtn")
var firstPage = document.getElementById("frontPage")
var chooseBtn = document.getElementById("choose")
var secondPage = document.getElementById("scndPage")

i = 0
var breedName = []

//creating request for breed names list
getList()
function getList() {
    var breedNameRequest = new XMLHttpRequest;

    breedNameRequest.addEventListener("load", function addBreedName(e) {
        var breedRequestAsText = e.target.response;
        var breedResponseAsAJSON = JSON.parse(breedRequestAsText)

        for (let i = 0; i < breedResponseAsAJSON.message.length; i++) {
            breedName.push(breedResponseAsAJSON.message[i]);
        }
       
    })
    breedNameRequest.open("GET", "https://dog.ceo/api/breeds/list")
    breedNameRequest.send();
    log(breedName)
}
// displaying the breed name and one image for each.
// addResult()

nextButton.addEventListener("click", addResult);



function addResult() {
    
   
    var imgRequest = new XMLHttpRequest;
    imgRequest.open("GET", "https://dog.ceo/api/breed/" + breedName[i] + "/images");
    imgRequest.send();

    imgRequest.addEventListener("load", function getImg(e) {

        var imgRequestAsText = e.target.response;
        var imgResponseAsAJSON = JSON.parse(imgRequestAsText);
        var imgResponse = imgResponseAsAJSON.message
        
        // randomly selecting an image from each breed
        var randomImg = imgResponse[Math.floor(Math.random() * imgResponse.length)];
     
        
        dogsBreed.innerHTML = "<p>" + breedName[i] + "</p>";
      
        dogsImg.innerHTML = `<img id="img" src="`+ randomImg +`"/>`;
        
        log(randomImg)
        
    })
    i++;
  
}


