import React, {useContext, useState, useEffect} from 'react'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
import {Container, Button} from '@mui/material/';
import StOwner from './StOwner'

const Spacetime = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  // const globalState = useContext(store);
  // const { dispatch } = globalState;
  const SPACETIME_CONTRACT='0x2953399124f0cbb46d2cbacd8a89cf0599974963'
  const SPACETIME_ID="73420591828577766976010686263780805592013870842024348598745919952551598358529"
  const Web3Api = useMoralisWeb3Api();
  const [owners, setOwners] = useState([])
  const [moralisLoading, setMoralisLoading] = useState([])
  const [isSpacetimeOwner, setIsSpacetimeOwner] =useState(false)
  const [spaceTimeNFT, setSpacetimeNFT] = useState({})
  const [isStOwner, setIsStOwner] = useState(false)

  const getSpacetimeOwners = async (tokenId) => {
    const options = { address: SPACETIME_CONTRACT, chain: "Polygon", token_id: tokenId };
    const nftOwners = await Web3Api.token.getTokenIdOwners(options);
    console.log('Owners', nftOwners)
    setOwners(nftOwners.result)
    return nftOwners
  }   
  
  const getSpacetimeOwners2 = async (tokenId) => {
    console.log('TOKEN', tokenId)
    const options = { address: SPACETIME_CONTRACT, chain: "Polygon", token_id: tokenId };
    const nftOwners = await Web3Api.token.getTokenIdOwners(options);
    console.log('Owners', nftOwners)
    // console.log('USER', user.attributes.ethAddress)
    const userSpacetime = nftOwners.result.find((nft) => nft.owner_of == user.attributes.ethAddress)


    if (userSpacetime) {
      // setIsSpacetimeOwner(true)
      return userSpacetime
    }
    // else return false
  }   

  const checkSpacetime = async () => {
    if (isAuthenticated) {
  
    } else {

      authenticate()
    // dispatch({type: 'SET_Spacetime_OWNER', payload: {isOwner: isSpacetimeOwner, total: SpacetimeOwners.total}}) 
  }
}

  const checkSpacetime2 = (data) => {
    if (isAuthenticated) {
    let ownerNFT = {}
    let moralisNFTs = []
    Promise.all(data.map((nft)=>{
      console.log('NFT', nft)
      moralisNFTs.push(nft.attributes)
     return getSpacetimeOwners2(nft.attributes.token_id)
    })).then((res)=> {
     console.log("WHO", res)
     const result = res.find(i => i.token_id )
     console.log('RESULT', result)
     if (res) {
       ownerNFT = res;
       return ownerNFT
     } else {
       console.log('NO MATCH')
     }
      // const ownerSpaceTime = moralisNFTs.find((nft) => nft.token_id == user.attributes.ethAddress) 
      // console.log('OWNER', user.attributes, ownerSpaceTime)
    })
    } else {

      // authenticate()
    // dispatch({type: 'SET_Spacetime_OWNER', payload: {isOwner: isSpacetimeOwner, total: SpacetimeOwners.total}}) 
  }

  }

 


  useEffect(() => {
    if (isAuthenticated) {
      // dispatch({type: 'SET_AUTHENTICATED', payload: true})
      // checkSpacetime()
      // checkSpacetime2()
    } else {
      // dispatch({type: 'SET_AUTHENTICATED', payload: false})
    }
  }, [isAuthenticated])

  const { data, error, isLoading } = useMoralisQuery("spacetime");

    if (error) {
      return <span>🤯</span>;
    }

    if (isLoading) {
      return <span>Loading</span>;
    }

    if (data && isAuthenticated) {
      console.log('DATA !', data)
      const ownerNFT = checkSpacetime2(data)
      console.log('ONWER NFT FOR REAL', ownerNFT)
    }

  console.log('IS SPCEETIMEO WNER', spaceTimeNFT)

  return (
    <div>
    <Container>
      <div>
      <h1>Welcome to the Spacetime Paradigm</h1>
      {/* <div>{JSON.stringify(data, null, 2)}</div>; */}
      <p>We're pretty broke. And to keep the space running we're about to get a little out of the box. We're minting some NFTs. Before you freak out on us about destorying the planet (it's ok we should all freak out about destroying the planet) just know that you can still sleep well at night, we are using the Polygon network to mint these NFTs which uses Proof of Stake validation which is many multitudes more energy efficient than ethereum is today. </p>
      <Button onClick={checkSpacetime}variant="outlined">Owner</Button>
      {isAuthenticated && <Button onClick={logout} variant="outlined">Logout</Button>}
      </div>
      {isSpacetimeOwner && isAuthenticated && <StOwner isStOwner={isSpacetimeOwner}/>}
      
    </Container>
  </div>
  )  
}


export default Spacetime