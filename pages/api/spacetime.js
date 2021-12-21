import { errorHandle } from './helpers/api';
import Moralis from 'moralis/node'
const SPACETIME_CONTRACT='0x2953399124f0cbb46d2cbacd8a89cf0599974963'
const SPACETIME_ID="73420591828577766976010686263780805592013870842024348598745919952551598358529"

const serverUrl = process.env.SERVER_URL
const appId = process.env.APP_ID

Moralis.start({ serverUrl, appId })


export default async function handler(req, res) {
  try {
    // const result = await someAsyncOperation()
    const stResponse = await getAllSpaceTimeNFTs()
    // const stJSON = await stResponse.json()
    console.log('NFT OWERN LIST', stResponse[0].get('token_id'))
    const owners = await getSpacetimeOwners(stResponse)
    const response = {
      owners: owners,
      NFTs: stResponse
    }
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }

}

const getSpacetimeOwners = async (spacetimeNFTs) => {
  let array = spacetimeNFTs
  let owners = [];
  let promises = []
  let result;
  console.log('STEP 2', array)
  for (let i = 0; i < array.length; i++) {
    const tokenId = array[i].get("token_id")
    console.log('LETS GO', tokenId)
    const options = { address: SPACETIME_CONTRACT, chain: "Polygon", token_id: tokenId };
    promises.push(await Moralis.Web3API.token.getTokenIdOwners(options));
  }
  result = await Promise.all(promises);
  for (let i = 0; i < result.length; i++) {
    owners.push(result[i].result[0])
  }   
  console.log('OWNERS', owners)
  return owners
}



const getAllSpaceTimeNFTs = (data) => {
  const Monster = Moralis.Object.extend("spacetime");
  const query = new Moralis.Query(Monster);
  const results = query.find();
  return results
}
  
  