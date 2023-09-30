// WEB303 Assignment 2

document.addEventListener("DOMContentLoaded", function() {
    var contentDiv = document.getElementById("content");
    var links = document.querySelectorAll("#content-wrapper a");
  
    function loadContent(url) {
      var xhr = new XMLHttpRequest();
  
      xhr.open("GET", url, true);
      xhr.send();
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          contentDiv.style.opacity = 0;
          contentDiv.innerHTML = xhr.responseText;
          contentDiv.offsetWidth;
          contentDiv.style.opacity = 1;
        }
      };
  
      xhr.onerror = function() {
        console.error("An error occurred.");
      };
    }
  
    function clearContent() {
      contentDiv.style.opacity = 0;
      contentDiv.innerHTML = "";
    }
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var targetUrl = link.getAttribute("href");
        clearContent();
        loadContent(targetUrl);
      });
    });
  });
  
  
  
