import styles from '../styles/Home.module.css'

const Banner = ({message}) => {
  return (
    <div className={styles.announcement}> 
      <a href={message.link} target="_blank" rel="noreferrer" >
        <div>
          {message.message}
        </div>
      </a>
     
    </div>
  )
}

export default Banner