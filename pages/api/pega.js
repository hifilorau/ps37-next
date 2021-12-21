import { FormControlUnstyledContext } from "@mui/material"


export default async function handler(req, res) {
  console.log('HIT THAT POINT')
  try {
    // const result = await someAsyncOperation()
    const response = await getSales()
    // const stJSON = await stResponse.json()
    
    // const response = {
     
    // }
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }

}


const getSales = async () => {
  const response = await fetch('api.pegaxy.io/market/history')
   console.log('RESPONSE', response)
  const data = await response.json()
  console.log('data', data)
//  fetch(api.pegaxy.io/market/history/0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E/${pegaId})
}