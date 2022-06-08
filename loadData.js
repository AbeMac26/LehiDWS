//require('dotenv').config();
//const{
const	DATABASE_URL= 'https://atfurhiavjpgoxvwrjma.supabase.co'
const	SUPABASE_SERVICE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1ODMzNTMsImV4cCI6MTk2OTE1OTM1M30.rW8eEHhilsWb-yKC1o0X4rPhWukF85HEQjcUjjh28IY'
//} = process.env;


//const {createClient} = require('@supabase/supabase-js');
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)

async function loadData() {
console.log("Im here")
	const { data, error } = await _supabase
		.from('CnE')
		.select()

console.log(data, error)

}	
loadData()
