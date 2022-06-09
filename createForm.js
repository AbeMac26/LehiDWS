const	DATABASE_URL= 'https://atfurhiavjpgoxvwrjma.supabase.co'
const	SUPABASE_SERVICE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODMzNTMsImV4cCI6MTk2OTE1OTM1M30.rW8eEHhilsWb-yKC1o0X4rPhWukF85HEQjcUjjh28IY'
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)


async function createList() {
    var counselorNames = [] 
    localStorage.setItem('counselorNames',JSON.stringify(counselorNames))
    var outName = JSON.parse(localStorage.getItem("counselorNames"))
    
    const { data, error } = await _supabase
            .from('CnE')
            .select('Name')
            .eq('completed', true)
   
    if(!error) {
        //loop display data here
        data.forEach(function(item){
            outName.push(item.Name)  
        })
    }
    localStorage.setItem('counselorNames', JSON.stringify(outName))
    console.log(data)
    console.log(error)
}
   
  
function optionList() {
  var outName = JSON.parse(localStorage.getItem("counselorNames"))
  var subjectSel = document.getElementById("counselor")
  var z = outName
  console.log(z)
  for (var i = 0; i < z.length; i++){
    subjectSel.options[subjectSel.options.length] = new Option(z[i], z[i])
  }
  subjectSel.onchange = function() {
    //display correct values
  
  }
}
createList()
optionList()


