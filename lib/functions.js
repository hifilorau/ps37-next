import GhostContentAPI from '@tryghost/content-api'
console.log('hit', process.env.GHOST_URL, process.env.GHOST_API_KEY)
// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v4'
});

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