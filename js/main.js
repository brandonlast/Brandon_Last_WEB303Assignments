// WEB303 Assignment 2

document.addEventListener("DOMContentLoaded", function() {
    var divContent = document.getElementById("content");
    var links = document.querySelectorAll("#content-wrapper a");
  
    function loadDiv(url) {
      var xhr = new XMLHttpRequest();
  
      xhr.open("GET", url, true);
      xhr.send();
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          
        var newDiv = document.createElement("div");
        newDiv.innerHTML = xhr.responseText;

        divContent.style.transition = "opacity 0.5s";
        divContent.style.opacity = 0;

        setTimeout(function() {
          divContent.innerHTML = newDiv.innerHTML;
          divContent.style.opacity = 1;
        }, 500);
        }
      };
  
      xhr.onerror = function() {
        console.error("An error occurred.");
      };
    }
  
    function clearDiv() {
      divContent.style.opacity = 0;
      divContent.innerHTML = "";
    }
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var Url = link.getAttribute("href");

        console.log("Link clicked:", Url);

        clearDiv();
        loadDiv(Url);
      });
    });
  });
  
  
  
