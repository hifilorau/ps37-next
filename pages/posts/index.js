import { getPosts } from "../../lib/functions";
import Link from "next/link";
import styles from '../../styles/Blog.module.css'

const Posts = (props) => (
  <div className={styles.blogWrapper}>
    <h1>Updates</h1>
    <ul >
      {props.posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.slug}`}>
           <h3><a className={styles.indexTitle}>{post.title}</a></h3> 
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Posts;

export async function getServerSideProps(context) {
  const posts = await getPosts();
  console.log('POOSSSTSSSS', posts)
  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    // revalidate: 1,
  };
}