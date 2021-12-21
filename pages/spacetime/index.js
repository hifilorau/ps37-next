import React, {useContext, useState, useEffect} from 'react'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
import {Container, Button, LinearProgress} from '@mui/material/';
import StOwner from './StOwner'
import styles from '../../styles/Spacetime.module.css'
import spacetimeImg from '../../public/images/spacetime.jpg'
import Image from 'next/image'
import NftList from './NftList.js'
import Footer from '../../components/footer'
import STHeader from './Header'


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
  const [isStOwner, setIsStOwner] = useState({})
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
  
  const renderConnect = () => {
    if (isAuthenticated) {
      return <Button onClick={logout}>Logout</Button>
    }
    if (isAuthenticating) {
      return <Button><LinearProgress /></Button>
    } 
    else return <Button onClick={authenticate}>Connect </Button>
  }

  return (
    <div className={styles.spacetime_container}>
    <Container>
      <div className={styles.content}>
         <STHeader />

          {!isAuthenticated && 
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
                <div>
                  <p> Owner? <span className={styles.connect} onClick={authenticate}>Connect your wallet here </span> to view your art, it's perks, or check your rewards.</p>
                  <label>Info</label>
                  <p>In addition to this digital poster, each NFT includes access to 5 PS37 shows in 2022, one full size poster print *pickup only, and a free edition of our next collaboration with Gabe which will be extended algorithimic collection based on this art. If we're gonna make monkey art, we're going to make the most fucked up monkey art. Somedays we have to embrace the devolution.</p>
                  <a target="_blank" href="https://opensea.io/collection/spacetime-paradigm" rel="noreferrer"><Button variant="outlined">Buy on Opensea</Button></a>
                </div> 
            </div>
          </div>}

        {ownerNFTs  &&  isAuthenticated && <NftList nfts={ownerNFTs}/>}
       

      </div>

  
      
    </Container>
    <Footer fixed={true}/>
  </div>
  )  
}


export default Spacetime