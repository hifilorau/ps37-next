import { getSinglePost, getResourceData } from "../../lib/functions";
import styles from '../../styles/Blog.module.css'
import Subscribe from "../../components/Subscribe";

const PostPage = ({post, events}) => {
  return (
    <>
    <Head>
    <title>Paradise Rewind: Post</title>
   </Head>
   
    <div className={styles.blogWrapper}>
       <div className={styles.ucWrapper}>
        <h3>Upcoming Events</h3>
        <ul>
        {events.map((event)=>{

          return (
            <li key={event.id}>
              <div className={styles.ucDate}>{event.fields.dateReadable}</div>
              <div className={styles.ucName}>{event.fields.name}</div>
              {event.fields.ticket_link && <a href={event.fields.ticket_link} target="_blank" rel="noreferrer"><div className={styles.ucTicket}>Tickets</div></a>}
            </li>
          )
        })}
        </ul>
      </div>
      <h1>{post.title}</h1>
      <img src={post.feature_image} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Subscribe />
    </div>
    </>
  );
};

export default PostPage;

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   // Get the paths we want to create based on posts
//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   // "fallback: false" gives us a 404 if post not found
//   return { paths, fallback: false };
// }

// Pass the page slug to "getSinglePost()" function
// Which then passes it to "posts.read()" to query the GhostContentAPI
export async function getServerSideProps(context) {
  const post = await getSinglePost(context.params.slug);
  const data = await getResourceData();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
    post: post,
    events: data
    }
    // revalidate: 1,
  };
}