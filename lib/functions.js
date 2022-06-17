import GhostContentAPI from '@tryghost/content-api'
console.log('hit', process.env.GHOST_URL, process.env.GHOST_API_KEY)
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v4'
});

// Create API instance with site credentials
export async function getPosts() {

  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err.message);
    });
}

export async function getSinglePost(postSlug) {
  console.log('SLUG', postSlug)
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export const minifyData = (data) => {
  return data.map((record) => {
      return {
        id: record.id,
        fields: record.fields,
      };
    });
}

export const getResourceData = async () => {
  const Airtable = require("airtable");
const airtable = new Airtable({ apiKey: process.env.AT_KEY });
const eventsBase = airtable.base('appdt6G7fO7fyLrR2');
  try {
    let records;
    // Create the records constant to select all base resources from the items table
    records = await eventsBase("Events").select({ 
      filterByFormula: `{homePage}=1`,
      sort: [{field:'date', direction: 'asc' }]

  
  }).all();
    console.log('RECSR', records)
    // Then saved the records as data that is send as json file
    // const data = JSON.parse(JSON.stringify(records)); // cloning the response
    return minifyData(records)

  } catch (e) {
    console.log(e.message)
  }
}