const worker1 = {name:"Rick Neal",questions:[]};
const worker2 = {name:"Abel Macias",questions:[]};
const worker3 = {name:"Aaron Aders",questions:[]};
const worker4 = {name:"Carie Burnham",questions:[]};
const worker5 = {name:"Mary Vasquez",questions:[]};

localStorage.setItem('worker1',JSON.stringify(worker1));
localStorage.setItem('worker2',JSON.stringify(worker2));
localStorage.setItem('worker3',JSON.stringify(worker3));
localStorage.setItem('worker4',JSON.stringify(worker4));
localStorage.setItem('worker5',JSON.stringify(worker5));


function load(){
   var outName = localStorage.getItem("uname");
   var outMonth = localStorage.getItem("month");
   
   document.getElementById("prntName").innerHTML= outName;
   document.getElementById("prntMonth").innerHTML= outMonth;
   
   
}

function createList(name){

if (localStorage.getItem('completed') == null){
		localStorage.setItem('completed','[]');
		var oldList = JSON.parse(localStorage.getItem('completed'));
		oldList.push(name);
	}	
		
else{
		var oldList = JSON.parse(localStorage.getItem('completed'));
		for(let i = 0;i<oldList.length;i++){
			if(!(oldList.includes(name))){
		  		oldList.push(name);
		  	}
		}
	}
		localStorage.setItem('completed',JSON.stringify(oldList));
}

function store(){
   const data = [];
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
   var inItem14 = document.getElementById("item14").value;
 
   
   var am = JSON.parse(localStorage.getItem('worker2'));
   var rn = JSON.parse(localStorage.getItem('worker1'));
	var aa = JSON.parse(localStorage.getItem('worker3'));
	var cb = JSON.parse(localStorage.getItem('worker4'));
	var mv = JSON.parse(localStorage.getItem('worker5'));
    data.push(inMonth);
    data.push(inDate);
    data.push(inItem1);
    data.push(inItem2);
    data.push(inItem3);
        data.push(inItem4);
	data.push(inItem5);
	data.push(inItem6);
	data.push(inItem7);
	data.push(inItem8);
	data.push(inItem9);
	data.push(inItem10);
	data.push(inItem11);
	data.push(inItem12);
	data.push(inItem13);
	data.push(inItem14);
		
	if(rn.name == inName){
	rn.questions = data;
	localStorage.setItem('worker1',JSON.stringify(rn));
	}
	else if(am.name == inName){
	am.questions = data;
	localStorage.setItem('worker2',JSON.stringify(am));
	}
	else if(aa.name == inName){
	aa.questions = data;
	localStorage.setItem('worker3',JSON.stringify(aa));
	}
	else if(cb.name == inName){
	cb.questions = data;
	localStorage.setItem('worker4',JSON.stringify(cb));
	}
	else {
	mv.questions = data;
	localStorage.setItem('worker5',JSON.stringify(mv));
	}

    
    	createList(inName);
     
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
	