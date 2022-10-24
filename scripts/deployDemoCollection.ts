import { ethers } from "hardhat";
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com')
const privateKey:any = process.env.PRIVATE_KEY;

const signer = new ethers.Wallet(
	privateKey,
	provider
)

async function main() {
	const demoCollectionFactory = await (await ethers.getContractFactory('DemoCollection')).connect(signer);
	const contract = await demoCollectionFactory.deploy("NAME", "SYMBOL");
	console.log(contract.address)
}

main()