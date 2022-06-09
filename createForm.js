var subjectObject = ["Links", "Images", "Tables", "Lists"]  
  
window.onload = function() {
  var subjectSel = document.getElementById("counselor")
  var z = subjectObject[this.value]
  for (var z in subjectObject){
    subjectSel.options[subjectSel.options.length] = new Option(z, z)
  }
  subjectSel.onchange = function() {
    //display correct values
  
  }
}
