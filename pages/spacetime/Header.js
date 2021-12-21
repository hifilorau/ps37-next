
import React, {useContext, useState, useEffect} from 'react'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
import { Button, LinearProgress} from '@mui/material/';
import styles from '../../styles/Spacetime.module.css'



const STHeader = () => {
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();

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
    <div className={styles.header}>
      <h1>Spacetime Paradigm<span> {renderConnect()}</span></h1>
      <h4>Gabe Gets</h4>
      <h5>The first in a (d)evolving curated line of digital NFT art releases. In addition to the art, each piece will serve to support the artist as well as PS37 and hopefully showcase some of the more positive and fun things artists and creators can do with new technologies.</h5>
  </div>
  )
}

export default STHeader