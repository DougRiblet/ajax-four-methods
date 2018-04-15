
// Exercise: Four methods for retrieving AJAX data

const api = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
let quoteDiv = document.getElementById("quote");

// Method 1: XMLHttpRequest

const swansonXHR = function(){
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

document.getElementById("getX").addEventListener("click", swansonXHR);

// Method 2: Fetch

const swansonFetch = function(){
  fetch(api, {
    method: 'GET'
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    quoteDiv.innerHTML = data;
  });
}

document.getElementById("getF").addEventListener("click", swansonFetch);

// Method 3: jQuery

$(document).ready(function(){
  $("#getJ").click(function(){
    $.get(api, function(data){
      quoteDiv.innerHTML = data;
    });
  });
});

// Method 4: Axios

const swansonAxios = function(){
  axios.get(api)
  .then(function(res){
    quoteDiv.innerHTML = res.data;
  })
  .catch(function(err){
    console.log("ERROR: ", err);
  });
}

document.getElementById("getA").addEventListener("click", swansonAxios);

