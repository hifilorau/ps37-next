import {Button} from '@mui/material/';
import styles from '../../styles/Spacetime.module.css'

const TombstoneInfo = () => {
  return (
    <div className={styles.infoSection}>
      <div>
      <label>Info</label>
      <p>In addition to each piece being a unique piece of digital art in a series of 37, each NFT includes:</p>
          <ul>
            <li>Two tickets to any 3 PS37 shows in 2022</li>
            <li>One full size poster print 26" x 20" *pickup only </li>
            <li>Claim to whitelist spot and early bird price for our next NFT collaboration with Gabe (summer/Fall 2022) which will be an algorithmic collection.</li>
          </ul> 
      </div>
      <a target="_blank" href="https://opensea.io/collection/spacetime-paradigm" rel="noreferrer"><Button variant="outlined">Buy on Opensea</Button></a>
  </div>
  )
}

export default TombstoneInfo