var subjectObject = ["Links", "Images", "Tables", "Lists"]  
  
window.onload = function() {
  var subjectSel = document.getElementById("counselor")
  var z = subjectObject[subjectSel.value][this.value]
  for (var i = 0; i < z.length; i++){
    subjectSel.options[subjectSel.options.length] = new Option(z[i], z[i])
  }
  subjectSel.onchange = function() {
    //display correct values
  
  }
}
