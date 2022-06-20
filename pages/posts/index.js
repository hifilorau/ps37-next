import { getPosts } from "../../lib/functions";
import React, {useState} from 'react'
import Link from "next/link";
import styles from '../../styles/Blog.module.css'
import Image from 'next/image'
import { style } from "@mui/system";
import Subscribe from "../../components/Subscribe";

const Posts = (props) => {
  const [subscribeB, setSubscribeB] = useState(false)
  return (
  <div className={styles.blogWrapper}>
    <h1>Updates <span className={styles.subscribeButton} onClick={() => setSubscribeB(true)}>Subscribe</span> </h1>
     {subscribeB && <Subscribe /> }
    <ul className={styles.posts} >
      {props.posts.map((post) => {
        const d = new Date(post.published_at)
        const date = d.toDateString()
        console.log('D', d) 
        return (
        <li className={styles.postLi} key={post.id}>
          <Link href={`/posts/${post.slug}`}>
          <a className={styles.indexTitle}>
           <h3>{post.title}</h3> 
           <div className={styles.date}>{date}</div>
           <div className={styles.imageWrapper}>
            <Image src={post.feature_image}  layout="fill" objectFit="cover"/>
           </div>
           </a>
          </Link>
        </li>
      )})}
    </ul>
  </div>
)}
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