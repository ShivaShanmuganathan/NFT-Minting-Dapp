const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

describe("NFT-Collection-Test", function () {
  let owner, addr1, addr2, addr3;
  it("Should mint a nft", async function () {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
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
    
    
    (await deployedCryptoDevsContract.startPresale())
    console.log(await deployedCryptoDevsContract.presaleStarted())
    console.log("Owner Of Contract",await deployedCryptoDevsContract.owner())
    console.log("Owner Address",await deployedCryptoDevsContract.owner())

    // print the address of the deployed contract
    console.log(
      "Crypto Devs Contract Address:",
      deployedCryptoDevsContract.address
    );


  });
});



// async function main() {
//   // Address of the whitelist contract that you deployed in the previous module
//   const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
//   // URL from where we can extract the metadata for a Crypto Dev NFT
//   const metadataURL = METADATA_URL;
//   console.log("metadataURL", metadataURL);
//   /*
//   A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//   so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
//   */
//   const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

//   // deploy the contract
//   const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
//     metadataURL,
//     whitelistContract
//   );

//   // print the address of the deployed contract
//   console.log(
//     "Crypto Devs Contract Address:",
//     deployedCryptoDevsContract.address
//   );
// }

// // Call the main function and catch if there is any error
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });