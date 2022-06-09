var subjectObject = ["Links", "Images", "Tables", "Lists"]  
  

}
window.onload = function() {
  var subjectSel = document.getElementById("counselor");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //display correct values
  
  }
