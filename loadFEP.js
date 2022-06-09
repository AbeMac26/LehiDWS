const worker1 = "Mary Vasquez"
const	DATABASE_URL= 'https://atfurhiavjpgoxvwrjma.supabase.co'
const	SUPABASE_SERVICE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODMzNTMsImV4cCI6MTk2OTE1OTM1M30.rW8eEHhilsWb-yKC1o0X4rPhWukF85HEQjcUjjh28IY'
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)


async function loadFEP() {
var inName = document.getElementById("uname").value;
 var inMonth = document.getElementById("month").value;
 var inDate = document.getElementById("date").value;
 var inItem1 = document.getElementById("item1").value; 
 var inItem2 = document.getElementById("item2").value;
 var inItem3 = document.getElementById("item3").value;
 var inItem4 = document.getElementById("item4").value;
 var inItem5 = document.getElementById("item5").value;
 var inItem6 = document.getElementById("item6").value;
 var inItem7 = document.getElementById("item7").value;
 var inItem8 = document.getElementById("item8").value;
 var inItem9 = document.getElementById("item9").value;
 var inItem10 = document.getElementById("item10").value;
 var inItem11 = document.getElementById("item11").value;
 var inItem12 = document.getElementById("item12").value;
 var inItem13 = document.getElementById("item13").value;
 
	

	if(inName == worker1 ){

		const { data, error } = await _supabase
  			.from('FEP')
  			.update([{ Month: inMonth, Date: inDate, Item1: inItem1, Item2: inItem2, Item3: inItem3, Item4: inItem4, 
				Item5: inItem5, Item6: inItem6, Item7: inItem7, Item8: inItem8, Item9: inItem9, Item10: inItem10, Item11: inItem11,
			 	Item12: inItem12, Item13: inItem13, completed: true}])
			.eq('Name',inName)
 		if (error){
			alert(error.message)
			console.clear()
		}
		console.log(data, error)
	}
	else
    alert(inName + ' you are not a FEP Counselor! \n OR \n You have typed your name incorrectly!')
}
