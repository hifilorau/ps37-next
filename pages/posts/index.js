import { getPosts } from "../../lib/functions";
import Link from "next/link";
import styles from '../../styles/Blog.module.css'
import Image from 'next/image'
import { style } from "@mui/system";

const Posts = (props) => (
  <div className={styles.blogWrapper}>
    <h1>Updates</h1>
    <ul className={styles.posts} >
      {props.posts.map((post) => (
        <li className={styles.postLi} key={post.id}>
          <Link href={`/posts/${post.slug}`}>
          <a className={styles.indexTitle}>
           <h3>{post.title}</h3> 
           <div className={styles.imageWrapper}>
            <Image src={post.feature_image}  layout="fill" objectFit="cover"/>
           </div>
           </a>
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