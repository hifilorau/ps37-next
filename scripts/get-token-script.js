const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("VaporPlane");
  const CONTRACT_ADDRESS = "0x3C368B86AF00565Df7a3897Cfa9195B9434A59f9"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});