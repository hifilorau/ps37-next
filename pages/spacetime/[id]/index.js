
// add bakc to package.json   // "react-moralis": "^0.3.1",

import React, {useContext, useState, useEffect} from 'react'
// import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
// import {Container, LinearProgress, Button} from '@mui/material/';
// import StOwner from '../../../components/spacetime/StOwner'
import styles from '../../../styles/Spacetime.module.css'
// import spacetimeImg from '../../../public/images/spacetime-min.jpg'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import STHeader from '../StHeader'

const SpacetimeInstance = () => {
//   const { authenticate, isAuthenticated, isAuthenticating, user, logout } = useMoralis();
//   const SPACETIME_CONTRACT='0x2953399124f0cbb46d2cbacd8a89cf0599974963'
//   const SPACETIME_ID="73420591828577766976010686263780805592013870842024348598745919952551598358529"
//   const Web3Api = useMoralisWeb3Api();
//   const [owners, setOwners] = useState([])
//   const [NFTs, setNFTs] = useState([])
//   const [thisOwnedNFT, setThisOwnedNFT] = useState({})
//   const [moralisLoading, setMoralisLoading] = useState([])
//   const router = useRouter()
//   const { id } = router.query
//   console.log('TOKEN ID', id)


 



//   const isSpacetimeOwnerCheck = () => {
//     const userAddress = user.get('ethAddress')
//     const ownerArray = owners.filter(x => x.owner_of === userAddress);  
//     const merged = ownerArray.map(item => {
//       const obj = NFTs.find(x => x.token_id == item.token_id)
//       return {...item, ...obj}
//     })

//     const thisNFT = merged.find(x => x.token_id === id);
//     if (ownerArray.length > 0) {
//       setThisOwnedNFT(thisNFT)
//     } else {
//       console.log('REROUTE', router.push('/spacetime'))
//     }
   
//   }

//   useEffect(() => {
//     fetch("/api/spacetime").then((res) => {
//       console.log('RES', res)
//       return res.json()
//     }).then((data) => {
//       console.log('DATA', data)
//      setOwners(data.owners)
//      setNFTs(data.NFTs)
//     })
//   }, [])


//   useEffect(() => {
//     if (owners && isAuthenticated) {
//       console.log('DATA !', owners)
//       isSpacetimeOwnerCheck();
//   // setIsSpacetimeOwner(isSpaceTimeOwnerCheck())
//     }
// }, [owners, NFTs])
  


  return (
    <div className={styles.spacetime_container}>
    {/* <Container className={styles.container}>
      <div className={styles.content}>
          
         <STHeader />
          <div className={styles.flex}>
            <div className={styles.mainImg}>
              <Image src={spacetimeImg} alt="Spacetime Paradigm by Gabe Eng-Goetz"/>
            </div>
      
            <div className={styles.tombstone}>
              {thisOwnedNFT  &&  isAuthenticated && <StOwner ownerNFT={thisOwnedNFT}/>}
              {!isAuthenticated && 
                <div>
                  <p> Owner? <span className={styles.connect} onClick={authenticate}>Connect your wallet here </span> to redeem or view rewards.</p>
                  <label>Info</label>
                  <p>In addition to this digital poster, each NFT includes:</p>
                    <p>access to 5 PS37 shows in 2022, one full size poster print *pickup only, and a free edition of our next collaboration with Gabe which will be extended algorithimic collection based on this art. If we're gonna make monkey art, we're going to make the most fucked up monkey art. Somedays we have to embrace the devolution.</p>
                    <a target="_blank" href="https://opensea.io/collection/spacetime-paradigm" rel="noreferrer"><Button variant="outlined">Buy on Opensea</Button></a>
                </div> }
              {isAuthenticated && thisOwnedNFT && <Link href="/spacetime"><Button>Go Back</Button></Link> }
            </div>
          </div>
      </div>
      
    </Container> */}
  </div>
  )  
}

export default SpacetimeInstance