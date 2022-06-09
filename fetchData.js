

async function fetchData() {
    const { data, error } = await _supabase
            .from('posts')
            .select()

    console.log(data)
    console.log(error)
}

if (localStorage.getItem('completed') != null){
		
		var oldData = JSON.parse(localStorage.getItem('completed'));
	
		let text = "<ul id=lname>";
 		for (let i = 0; i < oldData.length;i++){
			text += "<li>" + oldData[i] +" Completed on: "+ Date(2022,11,24) +"</li>";
		}
		text += "</ul>";
		document.getElementById("new").innerHTML = text;
	}
