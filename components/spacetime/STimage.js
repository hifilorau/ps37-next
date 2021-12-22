import styles from '../../styles/Spacetime.module.css'
import Image from 'next/image'

const FeaturedImage = ({image}) => {
  return (
    <div className={styles.mainImg}>
      <Image 
      src={image} 
      alt="Spacetime Paradigm by Gabe Eng-Goetz"
      priority
      // loader={myLoader}
      />
  </div>
  )
}

export default FeaturedImage