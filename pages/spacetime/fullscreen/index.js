
import spacetimeImg from '../../../public/images/spacetime-min.jpg'
import Image from 'next/image'
import styles from '../../../styles/Spacetime.module.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'

const Fullscreen = () => {

  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])


  return (
    <div className={styles.fullscreen}>
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <Zoom overlayBgColorEnd='rgba(0,0,0, 0.95)'>
      <div className={styles.imgWrap} layout="fill">
        <Image onLoad={handleImgLoad} src={spacetimeImg}/>
      </div>
      </Zoom>
      </ControlledZoom>
    </div>
  )
}


export default Fullscreen