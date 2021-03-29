var output = document.querySelector("#result");
// var jokes = document.getElementsByClassName("joke")
var cateogory = document.querySelector("#category")
var shareToWhatsapp = document.querySelector(".share-to-whatsapp");

function jokes_click(clicked_id){
    cateogory.innerHTML=clicked_id;
    get_joke(clicked_id);
}

function get_joke(text){
    fetch(makeUrl(text))
        .then(response => response.json())
        .then(data => displayJoke(data.joke))
        .catch(error => console.log(error.message))
}

function makeUrl(text){
    var url = "https://v2.jokeapi.dev/joke/" + text + "?type=single"
    return url
    console.log(url)
}

function displayJoke(joke){
    output.innerHTML = joke
    shareToWhatsapp.href =  "whatsapp://send?text=" + joke
}
