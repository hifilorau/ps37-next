import React, { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom'
import GridLoader from 'react-spinners/GridLoader'
import 'react-medium-image-zoom/dist/styles.css'

const ImageLoad = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    }
  }, [src])

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .15s linear"
      }}
      alt={alt}
    />
  )
});

export default ImageLoad;

export const ImageLoad2 = React.memo(({ src, placeholder, alt = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, updateSrc] = useState(placeholder);

  // useEffect(() => {
  //   // start loading original image
  //   const imageToLoad = new Image();
  //   // imageToLoad.src = src;
  //   imageToLoad.onload = () => {
  //     // When image is loaded replace the src and set loading to false
  //     setLoading(false);
  //     updateSrc(src);
  //   }
  // }, [src])
  console.log('SRC', src)
  return (
      <div className="image-loader-wrapper">
      {!loaded && 
      <div className="art-beatloader">
        <GridLoader color={'#6e0d60'} 
     size={20} />
      </div>
      }
      <Zoom>
      <img
        style={loaded ? {} : { display: 'none' }}
        src={src.src}
        onLoad={() => setLoaded(true)}
      /> 
      </Zoom>
    </div>

  )
});

