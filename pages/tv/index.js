import React, { useState, useEffect } from 'react'
import styles from '../../styles/TV.module.css'


const TV = () => {
    const [muteVideo, setMuteVideo]  = useState(true)
  useEffect(() => {
      setMuteVideo(false)
  })

  return (
    <div>
      <div className={styles.allWrap}>
          <img src="/images/diego_gonzalez.jpg" />
        <div className={styles.tvWrap}>
          <div className={styles.vidWrap}>
            <video src="/videos/redhot-small.mp4" muted={muteVideo} autoPlay loop/>
          </div> 
        </div>
       
      </div>
    </div>
  )
}

export default TV