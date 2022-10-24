import { ethers } from "hardhat";
require('dotenv').config();

import DemoCollection from "../artifacts/contracts/DemoCollection.sol/DemoCollection.json";

const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com')
const privateKey:any = process.env.PRIVATE_KEY;

const signer = new ethers.Wallet(
	privateKey,
	provider
)

const contractAddr = '0xF08FaEBbCa7f1c501c5617b7844f5d6AB1C0C049'
const abi = DemoCollection.abi

const contract = new ethers.Contract(contractAddr, abi, signer)

async function main() {
	const res = await contract.mint("hoge")
	console.log(res)
}

main()