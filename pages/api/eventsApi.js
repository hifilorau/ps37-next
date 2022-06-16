const Airtable = require('airtable');
const airtable = new Airtable({ apiKey: process.env.AT_KEY });
const eventsBase = airtable.base('appdt6G7fO7fyLrR2');

export default async function getEvents (req, res) {
  try {
    let records;
    // Create the records constant to select all base resources from the items table

    records = await eventsBase("Events").select({ filterByFormula: `{show}=1` })
    .all();
    res.status(200).json(records)

  }
  catch(error){
    console.log(error.message);
  };
}