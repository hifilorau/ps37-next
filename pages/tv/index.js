import React, { useState, useEffect, useRef} from 'react'
import styles from '../../styles/TV.module.css'
import Head from 'next/head'

const TV = () => {
    const [muteVideo, setMuteVideo]  = useState(true)
    const vidRef = useRef(null);
  useEffect(() => {
      vidRef.current.play()
      setMuteVideo(false)
  })

  

  return (
    <>
   <Head>
    <title>PS37 TV</title>
   </Head>
      <div className={styles.allWrap}>
          <img src="/images/diego_gonzalez.jpg" />
        <div className={styles.tvWrap}>
          <div className={styles.vidWrap}>
            <video ref={vidRef} src="/videos/redhot-small.mp4" muted={muteVideo}  loop/>
          </div> 
        </div>
       
      </div>
    </>
  )
}

export default TV