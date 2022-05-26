import React, {useContext, useState, useEffect} from 'react'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
import {Container, Button, LinearProgress} from '@mui/material/';
import StOwner from '../../components/spacetime/StOwner'
import styles from '../../styles/Spacetime.module.css'
import spacetimeImg from '../../public/images/spacetime-min.jpg'
import Image from 'next/image'
import NftList from '../../components/spacetime/NftList.js'
import STHeader from './StHeader'
import TombstoneInfo from '../../components/spacetime/TombstoneInfo'
import FeaturedImage from '../../components/spacetime/STimage'


const myLoader = ({ src, width, quality }) => {
  return (
    <div>
      <LinearProgress color="secondary" />
<LinearProgress color="success" />
<LinearProgress color="inherit" />
    </div>
  )
}


const Spacetime = () => {
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();
  // const globalState = useContext(store);
  // const { dispatch } = globalState;
  const SPACETIME_CONTRACT='0x2953399124f0cbb46d2cbacd8a89cf0599974963'
  const SPACETIME_ID="73420591828577766976010686263780805592013870842024348598745919952551598358529"
  const Web3Api = useMoralisWeb3Api();
  const [owners, setOwners] = useState([])
  const [NFTs, setNFTs] = useState([])
  const [moralisLoading, setMoralisLoading] = useState([])
  const [isSpacetimeOwner, setIsSpacetimeOwner] =useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const [ownerNFTs, setOwnerNFTs] = useState([])




  const isSpacetimeOwnerCheck = () => {
    const userAddress = user.get('ethAddress')
    const ownerArray = owners.filter(x => x.owner_of === userAddress);
    // const mergedNFTs = mergeById(ownerArray, NFTs)
    
    const merged = ownerArray.map(item => {
      const obj = NFTs.find(x => x.token_id == item.token_id)
      return {...item, ...obj}
    })

    console.log('MERGED MOFO', merged)
    if (ownerArray.length > 0) {
      setOwnerNFTs(merged)
      setIsOwner(true)
    }
  }


  useEffect(() => {
    fetch("/api/spacetime").then((res) => {
      return res.json()
    }).then((data) => {
     setOwners(data.owners)
     setNFTs(data.NFTs)
    })
  }, [])


  useEffect(() => {
    if (owners && isAuthenticated) {
      console.log('DATA !', owners)
      isSpacetimeOwnerCheck();
      // setIsSpacetimeOwner(isSpaceTimeOwnerCheck())
  }
  }, [owners, NFTs, isAuthenticated])
  
 

  return (
    <div className={styles.spacetime_container}>
    <Container className={styles.container}>
      <div className={styles.content}>
         <STHeader />

          {!isAuthenticated && 
          <div className={styles.flex}>
           
            <FeaturedImage image={spacetimeImg}/>
      
            <div className={styles.tombstone}>
                <div style={{height: '100%'}}>
                  <p> Owner? <span className={styles.connect} onClick={authenticate}>Connect your wallet here </span> to view your art, it's perks, or check your rewards.</p>
                  <TombstoneInfo />
                </div> 
            </div>
          </div>}

        {isAuthenticated && isOwner && <NftList nfts={ownerNFTs}/>}
        {!isOwner && isAuthenticated && 
          
          <div className={styles.flex}>
           
          <div className={styles.mainImg}>
            <Image 
            src={spacetimeImg} 
            alt="Spacetime Paradigm by Gabe Eng-Goetz"
            priority={true}
            // loader={myLoader}
            />
          </div>
    
          <div className={styles.tombstone}>
              <div style={{height: '100%'}}>
                <p> You don't own have one of these sick ass monkeys yet? What's wrong with you?</p>
                <TombstoneInfo />
              </div> 
          </div>
        </div>
        }
       

      </div>

  
      
    </Container>
    {/* <Footer fixed={true}/> */}
  </div>
  )  
}


export default Spacetime