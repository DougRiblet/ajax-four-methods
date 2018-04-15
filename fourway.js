
// Four methods for retrieving AJAX data

const api = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
let quoteDiv = document.getElementById("quote");

// Method 1: XMLHttpRequest

const swanX = function(){
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      let newQuote = JSON.parse(XHR.responseText);
      quoteDiv.innerHTML = newQuote;
    }
  }

  XHR.open("GET", api);
  XHR.send();
}

document.getElementById("getX").addEventListener("click", swanX);





