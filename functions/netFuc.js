const DATABASE_URL = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MzU2OTMsImV4cCI6MTk2OTExMTY5M30.-NiGB22jxJEMZUVFZ6MwjG7Q5a8otKZuVpFC7hH4X_s;

const SUPABASE_SERVICE_API_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZnVyaGlhdmpwZ294dndyam1hIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MzUzNTY5MywiZXhwIjoxOTY5MTExNjkzfQ.C1d-ROdD7O-RiWZ-rVzcsta8gw3Hz06gjqktwtrVJMA;

require('dotenv').config();
const{
	DATABASE_URL,
	SUPABASE_SERVICE_API_KEY
} = process.env;


const {creaeClient} = rquire('@supabase/supabases-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

export.handler = async event =>{

	const{data, error} = await supabase
		.from('CnE')
		.insert([
			{ item1: '100'},
		]);

console.log(data, error);

}	