const	DATABASE_URL= 'https://atfurhiavjpgoxvwrjma.supabase.co'
const	SUPABASE_SERVICE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODMzNTMsImV4cCI6MTk2OTE1OTM1M30.rW8eEHhilsWb-yKC1o0X4rPhWukF85HEQjcUjjh28IY'
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)

function optionList() {
  var out = JSON.parse(sessionStorage.getItem("counselorNames3"))
  var subjectSel = document.getElementById("counselor")
  var z = out
  console.log(z)
  for (var i = 0; i < z.length; i++){
    subjectSel.options[subjectSel.options.length] = new Option(z[i], z[i])
  }
  subjectSel.onchange = async function() {
    var out = JSON.parse(sessionStorage.getItem("counselorNames3"))
    const { data, error } = await _supabase
            .from('connections')
            .select('*')
            .eq('Name', this.value)
    console.log(data)
    //display correct values 
    document.getElementById("prntMonth").innerHTML = data[0].Month
    document.getElementById("item1").value = data[0].item1
    document.getElementById("item2").value = data[0].item2
    document.getElementById("item3").value = data[0].item3
    document.getElementById("item4").value = data[0].item4
    document.getElementById("item5").value = data[0].item5
  }
}

async function createList() {
    var counselorNames3 = [] 
    sessionStorage.setItem('counselorNames3',JSON.stringify(counselorNames3))
    var outName = JSON.parse(sessionStorage.getItem("counselorNames3"))
    
    const { data, error } = await _supabase
            .from('connections')
            .select('Name')
            .eq('completed', true)
   
    if(!error) {
        //loop display data here
        data.forEach(function(item){
            outName.push(item.Name)  
        })
    }
    sessionStorage.setItem('counselorNames3', JSON.stringify(outName))
    console.log(data)
    console.log(error)
    optionList()
}
   
  

createList()
