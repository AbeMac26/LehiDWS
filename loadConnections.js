const worker1 = 'Aaron Aders'
const worker2 = 'Carie Burnham'
const	DATABASE_URL= 'https://atfurhiavjpgoxvwrjma.supabase.co'
const	SUPABASE_SERVICE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODMzNTMsImV4cCI6MTk2OTE1OTM1M30.rW8eEHhilsWb-yKC1o0X4rPhWukF85HEQjcUjjh28IY'
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)


async function loadConnections() {
var inName = document.getElementById("uname").value;
 var inMonth = document.getElementById("month").value;
 var inDate = document.getElementById("date").value;
 var inItem1 = document.getElementById("item1").value; 
 var inItem2 = document.getElementById("item2").value;
 var inItem3 = document.getElementById("item3").value;
 var inItem4 = document.getElementById("item4").value;
 var inItem5 = document.getElementById("item5").value;

	if(inName == worker1 ){

		const { data, error } = await _supabase
  			.from('connections')
  			.update([{ Month: inMonth, Date: inDate, item1: inItem1, item2: inItem2, item3: inItem3, item4: inItem4, 
				item5: inItem5, completed: true}])
			  .eq('Name',inName)
 		if (error){
			alert(error.message)
			console.clear()
		}
		console.log(data, error)
	}
	else
    alert(inName + ' you are not a FEP Counselor \n You type your name incorrectly!')
}
