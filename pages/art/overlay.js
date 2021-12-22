
import styles from '../../styles/Art.module.css'
import React, {useEffect, useState} from 'react'

const Overlay = () => {
  const [bgColor, setBgColor] = useState("rgba(0,0,0,.7)")

  const freak = () => {
      const x = Math.floor(Math.random() * 256);
      const y = 100+ Math.floor(Math.random() * 256);
      const z = 50+ Math.floor(Math.random() * 256);
      const bgColor = "rgba(" + x + "," + y + "," + z + "," + ".8 )";
      setBgColor(bgColor)
      clearTimeout(timeOut);
  }

  useEffect(() => {
    // timeOut
    // clearInterval(timeOut)
  }, [bgColor])

  // const timeOut = setInterval(() => {
  //   freak()
  // }, 100)

  // timeOut

  return (<div className={""} style={{background: bgColor}}>

  </div>)
}

export default Overlay