// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("VaporPlane");
  
  const nft = await NFT.deploy();
  
  await nft.deployed();
  
  console.log("NFT deployed to:", nft.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});