
require('dotenv').config();
const{
	DATABASE_URL,
	SUPABASE_SERVICE_API_KEY
} = process.env;


//const {createClient} = require('@supabase/supabase-js');
const _supabase = supabase.createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

async function loadData() {
	const { data, error } = await _supabase
		.from('CnE')
		.insert([
			{ item1: '100'},
		]);

console.log(data, error);

}	
loadData()
