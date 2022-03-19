const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  console.log("metadataURL", metadataURL);
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
  
  const NFT_price = ethers.utils.parseUnits('0.001', 'ether')
  await deployedCryptoDevsContract.startPresale()
  console.log("PreSale Started: ",await deployedCryptoDevsContract.presaleStarted())
  (await deployedCryptoDevsContract.presaleMint({ value: NFT_price })).wait()
  // console.log("Token 1 Owner Address: ",await deployedCryptoDevsContract.ownerOf(1))
  
  


  // print the address of the deployed contract
  
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });