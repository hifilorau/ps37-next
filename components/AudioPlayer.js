
import React, {useState, useRef, useEffect} from 'react'
import styles from '../styles/Audio.module.css'
// import AudioControls from './AudioControls';
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import {Menu, Container, Button, Icon, MenuHeader} from 'semantic-ui-react'
// import SoundViz from './SoundViz.js'
// const SoundViz = dynamic(() => import("./SoundViz").then((mod) => mod.default), {
//   ssr: false,
// })
const tracks = [{
  title: 'March Again',
  artist: 'Hifilorau',
  color: "green",
  image: '',
  artist_link: "www.hifilorau.com"
}];
const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hidePlayer, setHidePlayer] = useState(false)
  const [isShuffle, setIsShuffle] = useState(true)
  const { title, artist, color, image, artist_link} = tracks[trackIndex]
  // const song = '/'     /
  // const audioSrc = tracks[trackIndex].fields.mp3[0].url
  const audioSrc = '/march.mp3'
	// Refs
  const audioRef = useRef(new Audio(audioSrc));
  
  // const analyzerCanvas = useRef(null);
  // const ctx = useRef(null)


  const intervalRef = useRef();
  const isReady = useRef(false);
 
  // Destructure for conciseness
	const { duration } = audioRef.current;



  const startTimer = () => {
	  // Clear any timers already running
	  clearInterval(intervalRef.current);
	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      toNextTrack();
	    } else { 
	      setTrackProgress(audioRef.current.currentTime);
	    }
	  }, [1000]);
  }
  
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   // const randomIndex = getRandomIndex()
  //   // setTrackIndex(randomIndex)
  // }, [tracks]);

  useEffect(() => {
 
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.current.pause();
  
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
  
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  const play = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } 
    else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }

  const mute = () => {
    audioRef.current.volume(0);
  }

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random()*tracks.length)
    if (randomIndex == trackIndex) {
      return getRandomIndex()
    } else 
    return randomIndex  
  }

  const toNextTrack = () => {
    // if (isShuffle) {
    // const randomIndex = getRandomIndex()
    // setTrackIndex(randomIndex)
    // } else {
      if (trackIndex < tracks.length - 1) {
        setTrackIndex(trackIndex + 1);
      } else {
        setTrackIndex(0);
      }
    // }  
  }

  const createVisualization = () => {
    let context = new AudioContext();
}

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }
  
  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }

  const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;

  return (
  	<div className={hidePlayer ? styles.audioPlayerClosed :styles.audioPlayer}>
      <div onClick={play} className={styles.speaker}>
        <img src="/images/speaker.png"/>
      </div>
      {/* <div onClick={mute}>Mute</div> */}
      {/* <div onClick={() => setHidePlayer(!hidePlayer)} className={styles.toggleWrapper}>
      {hidePlayer ? <Icon flipped='horizontally' name='caret down' size={"large"}/> :
       <Icon name='caret right' size={"large"}/> }
      </div>

      <div className={styles.researchRadio}>Research Radio</div>
      <div className={styles.audioInner}>
			<div className={styles.trackInfo}>
  
        <div>
          <h2 className={styles.title}>{title}</h2>
          <a target="_blank" rel="noreferrer" href={artist_link}><h3 className={styles.artist}>{artist}</h3></a>
        </div>
        <div className={styles.controls}>
            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
              shuffle={isShuffle}
              setShuffle={setIsShuffle}
            />
        </div>
        <img
			    className={styles.artwork}
			    src={image ? image : "/logo_bw_circle.png"}
			    alt={`track artwork for ${title} by ${artist}`}
			  />
		   
        
			</div>

      <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className={styles.progress}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        </div> */}
		</div>
  )
}

export default React.memo(AudioPlayer)