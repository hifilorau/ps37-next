import { getPosts, getResourceData } from "../../lib/functions";
import React, {useState} from 'react'
import Link from "next/link";
import styles from '../../styles/Blog.module.css'
import Image from 'next/image'
import Subscribe from "../../components/Subscribe";

const Posts = ({posts, events, error}) => {
  const [subscribeB, setSubscribeB] = useState(false)
  const featuredPost = posts ? posts[0] : null;
  const featuredDate = posts ? new Date(featuredPost.published_at) : null
  const featuredD = posts ? featuredDate.toDateString() : null;

  if (error){
    return (<div classsName={styles.postsError}>{error}</div>)
  }

  if (!posts){
    return (<div className={styles.postsError}>Check back in a sec.</div>)
  }
 

  return (
  <div className={styles.eventsWrapper}>
    <h1 className={styles.rewindHead}>The Paradise Rewind </h1>
    <div className={styles.subscribeButton} onClick={() => setSubscribeB(true)}>Subscribe</div>
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
          <div className={styles.freakOverlay}></div>
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
  try {
    const posts = await getPosts();
    const data = await getResourceData();
    if (!posts) {
      return {
          props: {posts: null}
      };
    }  
    return {
      props: { posts, events: data },
      // revalidate: 1,
    };
  } catch (e) {
      return {
        props: {error: e.message}
      };
    }
   
}