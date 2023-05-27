document.querySelector('.copyright').appendChild(document.createTextNode(new Date().getFullYear()));

function updateContent() {
    var dynamicContent = document.getElementById("dynamicContent");
    
    dynamicContent.innerHTML = "Current time: " + new Date().toLocaleTimeString();
  }
  
updateContent();
  
setInterval(updateContent, 1000);
  
setTimeout(function() {
    alert("Hello! I guarantee a response to emails within a day.");
}, 10000);