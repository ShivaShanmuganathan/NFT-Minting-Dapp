# NFT-Minting-Dapp

# [Full Stack NFT Minting Dapp](http://nft-collection-dapp-kappa.vercel.app/) 

## Project is live in the 🔗Rinkeby Test Network🔗
- ### [Check Out 🚀 NFT Minting Dapp ](https://nft-collection-dapp-kappa.vercel.app/) ⚠ Mint your NFT to participate in the DAO ⚠
- ### [Check Out 🚀 Live DAO Project ](https://fullstack-dao-dapp.vercel.app/)
- ### Collect your Rinkeby-Eth from [this faucet](https://faucets.chain.link/rinkeby)

## Project Screenshot
![capture](./Copy-of-Crypto-Devs-25-March-2022.gif)

## Project Description 📃

### [Full Stack NFT Minting Project](http://nft-collection-dapp-kappa.vercel.app/)
- Users can mint NFT from this [NFT Minting Dapp](https://nft-collection-dapp-kappa.vercel.app/) by paying 0.01 ETH
- Only the Crypto Dev NFT Holders will be able to create proposals and vote.
- NFT Holders can create proposals by specifying the parameters required to make a purchase from the NFT Marketplace.
- `10 minutes` is the voting period for the proposal. Only the NFT Holders are allowed to vote.
- After the voting period, the proposal can be executed by the Crypto Dev NFT Holders.

## Directory Structure 📂
- `my-app` ⏩ Contains the Next.js Frontend of this application
- `nft-collection-dapp/contracts` ⏩ Contains all the Solditiy smart contracts deployed in the Rinkeby Test Network.
- `nft-collection-dapp/test` ⏩ Contains Tests for the smart contract

## Run This Project 🏃‍♀️💨
1. Clone this repository 
```shell 
git clone https://github.com/ShivaShanmuganathan/NFT-Minting-Dapp
```

2. Frontend - goto the frontend folder, install dependencies, and run the app. Visit [localhost:3000](http://localhost:3000/)
```shell
cd my-app
npm install
npm run dev
```
3. Backend - goto to the backend folder, install dependencies, compile and test the smart contract
```shell
cd nft-collection-dapp
npm install
npx hardhat compile
npx hardhat test
```

### Environment variables (not needed for running project locally)
Create a `.env` file in the DAO-Contract folder and fill it up with the below instructions
``` shell
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard and select the network as Rinkeby, and replace "add-the-alchemy-key-url-here" with its key url
ALCHEMY_API_KEY_URL="YOUR-RINKEBY-ALCHEMY-KEY"

// Replace this private key with your RINKEBY account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
RINKEBY_PRIVATE_KEY="YOUR-PRIVATE-KEY"
```
