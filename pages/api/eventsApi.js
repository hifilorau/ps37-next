


export default function getEvents (req, res) {
  console.log('proces', req)
  fetch(`https://api.airtable.com/v0/appdt6G7fO7fyLrR2/Events?maxRecords=15&view=Grid%20view`,
  {
    headers: {"Authorization": `Bearer ${process.env.AT_KEY}` }
  })
  .then((resolve) => resolve.json())
  .then((data) => {
    console.log('FROM API', data)
    res.status(200).json(data.records)
    return data.records
  })
  .catch((error) => {
    console.log(error);
  });
}