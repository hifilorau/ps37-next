const Airtable = require('airtable');
const airtable = new Airtable({ apiKey: process.env.AT_KEY });
const eventsBase = airtable.base('appdt6G7fO7fyLrR2');

export default async function getEvents (req, res) {
  try {
    let records = await eventsBase("Events").select({  filterByFormula: `{homePage}=1`,
    sort: [{field:'date', direction: 'asc' }] })
    .all();
    res.status(200).json(records)
  }
  catch(error){
    console.log('ERROR with event fetch', error.message)
    res.status(400).json(error)
  };
}

