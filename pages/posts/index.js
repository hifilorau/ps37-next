import { getPosts, getResourceData } from "../../lib/functions";
import React, {useState} from 'react'
import Link from "next/link";
import styles from '../../styles/Blog.module.css'
import Image from 'next/image'
import { style } from "@mui/system";
import Subscribe from "../../components/Subscribe";

const Posts = ({posts, events}) => {
  const [subscribeB, setSubscribeB] = useState(false)
  const featuredPost = posts[0]
  const featuredDate = new Date(featuredPost.published_at)
  const featuredD = featuredDate.toDateString()
  return (
  <div className={styles.blogWrapper}>
    <h1>The Paradise Rewind<span className={styles.subscribeButton} onClick={() => setSubscribeB(true)}>Subscribe</span> </h1>
     {subscribeB && <Subscribe /> }
     <div className={styles.rewindBanner}>
     <div className={styles.featuredPost} key={featuredPost.id}>
          <Link href={`/posts/${featuredPost.slug}`}>
          <a className={styles.indexTitle}>
           <h3>{featuredPost.title}</h3> 
           <div className={styles.date}>{featuredD}</div>
           <div className={styles.imageWrapper}>
            <Image src={featuredPost.feature_image}  layout="fill" objectFit="cover"/>
           </div>
           </a>
          </Link>
        </div>

     </div>
    <ul className={styles.posts} >
      {posts.map((post, index) => {
        const d = new Date(post.published_at)
        const date = d.toDateString()
        console.log('D', d) 
        if (index !== 0 )
        return (
        <li className={styles.postLi} key={post.id}>
          <Link href={`/posts/${post.slug}`}>
          <a className={styles.indexTitle}>
           <div className={styles.imageWrapper}>
            <Image src={post.feature_image}  layout="fill" objectFit="cover"/>
           </div>
           <h3>{post.title}</h3> 
           <div className={styles.date}>{date}</div>
           </a>
          </Link>
        </li>
      )})}
        <li className={styles.freakWrap}>
          <div className={styles.vidWrap}>
            <video src="/images/pstest.mp4" autoPlay muted loop/>
          </div>

          <ul className={styles.eventVidContent}>
            <li className={styles.vidEvents}>UPCOMING</li>
          {events.map((event)=>{
            return (
              <li key={event.id} className={styles.vidEvents}>
                <div className={styles.ucDate}>{event.fields.dateReadable}</div>
                <div className={styles.ucName}>{event.fields.name}</div>
                {event.fields.ticket_link && <a href={event.fields.ticket_link} target="_blank" rel="noreferrer"><div className={styles.ucTicket}>Tickets</div></a>}
              </li>
            )
          })}
          </ul>
      </li>
    </ul>
  </div>
)}
export default Posts;

export async function getServerSideProps(context) {
  const posts = await getPosts();
  const data = await getResourceData();
  console.log('POOSSSTSSSS', posts)
  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, events: data },
    // revalidate: 1,
  };
}