import { ethers } from "hardhat";
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com')
const privateKey:any = process.env.PRIVATE_KEY;

const signer = new ethers.Wallet(
	privateKey,
	provider
)

console.log(signer)