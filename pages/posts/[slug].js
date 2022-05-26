import { getSinglePost } from "../../lib/functions";
import styles from '../../styles/Blog.module.css'

const PostPage = (props) => {
  return (
    <div className={styles.blogWrapper}>
      <img src={props.post.feature_image} />
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
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
  console.log('HIIII', context.params.slug)
  const post = await getSinglePost(context.params.slug);
  console.log('POST TOM', post)
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    // revalidate: 1,
  };
}