const	DATABASE_URL= 'https://atfurhiavjpgoxvwrjma.supabase.co'
const	SUPABASE_SERVICE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODMzNTMsImV4cCI6MTk2OTE1OTM1M30.rW8eEHhilsWb-yKC1o0X4rPhWukF85HEQjcUjjh28IY'

async function fetchFep() {
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)
	const { data, error } = await _supabase
            .from('FEP')
            .select()
	    .eq('completed', true)
	if(!error) {
        	//loop display data here
		let contents = "<li>"
        	data.forEach(function(item){
            contents += `${item.Name}: Date completed ${item.Date}` 
        })
        contents += "</li>"
        document.getElementById("lname").innerHTML = contents
    }
    console.log(error)
}
fetchFep()

async function fetchJCR() {
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)
	const { data, error } = await _supabase
            .from('connections')
            .select()
	    .eq('completed', true)
	if(!error) {
        	//loop display data here
		let contents = "<li>"
        	data.forEach(function(item){
            contents += `${item.Name}: Date completed ${item.Date}` 
        })
	contents += "</li>"
        document.getElementById("lname").innerHTML = contents
      }
	console.log(data)
    console.log(error)
}
fetchJCR()

async function fetchData() {
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)
	const { data, error } = await _supabase
            .from('CnE')
            .select()
	    .eq('completed', true)
	if(!error) {
        	//loop display data here
		let contents = "<li>"
        	data.forEach(function(item){
            contents += `${item.Name}: Date completed ${item.Date}` 
        })
	contents += "</li>"
        document.getElementById("lname").innerHTML = contents
    }
	
    console.log(data)
    console.log(error)
}

fetchData()
