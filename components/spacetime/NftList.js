import styles from '../../styles/Spacetime.module.css'
import Link from 'next/link'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material/';

const NftList = ({nfts}) => {


  console.log('GETTING CLOSER', nfts)
  return (
    <div>
      <h3>Your Collection</h3>
      <ul className={styles.collectionUl}>
        {nfts.map((nft) => {
          return (
            <Card key={nft.token_id} className={styles.collection_card} sx={{maxWidth: 300}}>
                <CardMedia
                  component="img"
                  // height="194"
                  image='/images/spacetime.jpg'
                  alt="Spacetime Paradigm NFT Image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      {`Spacetime Paradigm #${nft.serial}`}
                </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/spacetime/${nft.token_id}`}><Button size="small">View</Button></Link>
                </CardActions>
            </Card>
          )
        })}
      </ul>
    </div>
  )
}

export default NftList;