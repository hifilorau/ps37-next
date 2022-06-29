import React, {useState, useEffect} from 'react'
import Head from 'next/head'

// import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
// import { create } from 'ipfs-http-client'
// import '../Future/future.css'
// import { connectWallet, getCurrentWalletConnected, mintNFT } from "../../utils/interact.js"
// import MetaInfo from '../../components/Meta.js'
// import P5Vapor from './P5Vapor.jsx'
// const client = create('https://ipfs.infura.io:5001/api/v0')
const contractAddress = "0x90fa9714C8e7961F8D703A0a7085D5F29F269c23"
import P5Vapor from "../../components/P5Vapor"





const VaporPlanes = () => {
// const context = useWeb3React()
// const { connector, library, chainId, account, activate, deactivate, active, error } = context
// //  const [gridLake, setGridLake] = useState(false)



///STATE ITEMS 
// const [nftAttributes, setNftAttributes] = useState({})
// const [fileUrl, updateFileUrl] = useState(``)
// const [customSave, setCustomSave] = useState(null)
// const [preFadeOut, setPreFadeOut] = useState(false)
// const [name, setName] = useState("");
// const [description, setDescription] = useState("");
// const [url, setURL] = useState("");
// const [metaInfo, setMetaInfo] = useState(true)
const [isLoading, setIsLoading] = useState(true)


///INITIALIZE VARIABLES
// var hLine;
// let attributes = {}
// let sun;
// let isSun;
// let skyColor;
// let sunColor;
// let lineColor;
// let mtnColors = [];
// let moonColors = [];
// let gridLake;
// let starColor;
// let mtns = [];
// let moons = [];
// let img;
// let img1;
// let img2;
// let img3;
// let img4;
// let img5;
// let img6;
// let img7;
// let testImage;
// let images = [];
// let thisLogo;
// let thisImg;




let width;
// let width = 3840;
// let width = 2160;
let height;
// let height = 2160;
//need polar and black scheme
let THEME_ARRAY = [
	///Lavendar Plane
	["#BEFCFF", "#DEFFFA", "#FFDAF5", "#B0E1FF","#E6C6FF" ], /// Roz Vonos (pink mountain)
	//MIDNIGHT BLUE PLANE
	["#fb321a", "#ff911a", "#e100f5", "#450eff", "#21006f"], 

	["#06f984", "#fde802", "#ffd11a", "#fc5d02", "#ff00f9"], /// Mercury's Horn

	["#aafec6", "#42fe90", "#00d98a", "#018c77", "#02515d"],  /// C.R.E.A.M

	["#FFDAF5", "#DEFFFA", "#FFDAF5", "#B0E1FF","#fff" ],  /// Polaris 
	//black theme
	["#d84800", "#f07800", "#483018", "#f07800","#000" ],   /// Birth of Hendrix 
		//BLAVENDAR
	["#6e0d60", "#DEFFFA", "#972688", "#B0E1FF","#000" ], /// Spacecraft Paradiso

	///black theme

	///yellow theme
	["#c75001", "#d43acc", "#de689f", "#e79771","#fbf017", "#f1c344"],  ///Doja's Delight

	['#688141', "#C48A4D", "#df9875", "#2F596F", "#A1819B"],  ///Circundum Cage


	['#fffd00', '#ff0000', '#fad300', '#cb0900', '#fff700']  /// the Plane of the Eternal Flame
]


const setThemeAttribute = (i) => {
	console.log('set theme', i)
	if (i == 0) {
		return "Roz Vonos"
	}
	if (i == 1) {
		return "Midnight in Eden"
	}
	if (i == 2) {
		return "Kid's Amnesia"
	}
	if (i == 3) {
		return "C.R.E.A.M."
	}
	if (i == 4) {
		return "Mogwai Polaris"
	}
	if (i == 5) {
		return "Imaginarium Hendrix"
	}
	if (i == 6) {
		return "Spacecraft Paradiso"
	}
	if (i == 7) {
		return "Doja's Delight"
	}
	if (i == 8) {
		return "Cage's Silence"
	}
	if (i == 9) {
		return "Plane of the Eternal Flame"
	}
}



const override = `
display: block;
margin: 0 auto;
border-color: red;
`;

useEffect( async () => {
		// const {address, status} = await getCurrentWalletConnected();
    // setWallet(address)
    // setStatus(status); 
		// addWalletListener();

		if (typeof window !== 'undefined') {
			setIsLoading(false)
		} else {
			setIsLoading(true)
		}
		
}, [])


//// SAVE STUFF
// const blobToFile = (theBlob, fileName) => {
// 	theBlob.lastModifiedDate = new Date();
// 	theBlob.name = fileName;
// 	return theBlob;
// };

// const b64toBlob = (dataURI) => {
// 	const byteString = atob(dataURI.split(',')[1]);
// 	const ab = new ArrayBuffer(byteString.length);
// 	const ia = new Uint8Array(ab);
	
// 	for (let i = 0; i < byteString.length; i++) {
// 			ia[i] = byteString.charCodeAt(i);
// 	}
// 	return new Blob([ab], { type: 'image/jpeg' });
// }


const saveMe = async (p5) => {
	// console.log('save', nftAttributes)
	// const id = 1;
	// const canvas = document.querySelector('canvas')
	// const dataUrl = canvas.toDataURL("img/png");
	// const blob = b64toBlob(dataUrl, "image/png");
	// const fileName = id + "-" + "vapor_plane.png";
	// const file = blobToFile(blob, fileName);



	// try {
	// 	const serial = "test"
	// 	const addedFile = await client.add(file)
	// 	const imageUrl = `https://ipfs.infura.io/ipfs/${addedFile.path}`

	// 	let attArr = []
	// 	// console.log('URL HOMIE', url)
	// 	// const attributes = {image: iamgeUrl, ...nftAttributes}
	// 	for (const [key, value] of Object.entries(nftAttributes)) {
	// 		attArr.push({
	// 			trait_type: key,
	// 			value: value
	// 		})
	// 	}
	// 	let metaData = {
	// 		description: "",
	// 		external_url: "https://ps37.space/vaporplanes",
	// 		image: imageUrl,
	// 		attributes: attArr,
	// 		name: `Vapor Plane #${serial}`

	// 	}

	// 	const addedMetaData = await client.add(JSON.stringify(metaData))
	// 	const metaURI = `https://ipfs.infura.io/ipfs/${addedMetaData.path}`
	// 	console.log('meta data', metaURI)
	// 	const { status } = await mintNFT(metaURI);
	// 	console.log('STATUS', status)
  //   setStatus(status);
	// }
	// catch (err) {
	// 	console.log('SAVE ERROR', err)
	// }


	setInfo(true)
	// console.log(dataUrl)
 }


 //// wallet connect stuff

 const connectWalletPressed = async () => { //TODO: implement
	// const walletResponse = await connectWallet();
  //   setStatus(walletResponse.status);
  //   setWallet(walletResponse.address);
 };
 const onMintPressed = async () => { //TODO: implement
 };


const addWalletListener = () => {

}

const fadeOut = () => {
  // setPreFadeOut(true)
	// setTimeout(() => {
	// 	setInfo(false)
	// }, 500)
}



  return (
    <>
		<Head>
    <title>Vaporplanes: Create Your Own Ethereal Plane</title>
   </Head>
		 {!isLoading && <P5Vapor />} 

			
    </>
  )
}

export default VaporPlanes