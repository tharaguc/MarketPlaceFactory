import { ethers } from 'hardhat';
import { expect } from 'chai';
import { DemoCollection, MarketPlaceFactory } from '../typechain-types';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

describe('test', () => {
	let addrs: SignerWithAddress[] = [];
	it('shoud deploy and create mp', async () => {
		[addrs[0], addrs[1], addrs[2]] = await ethers.getSigners();
		const MPF = await ethers.getContractFactory('MarketPlaceFactory');
		const MP = await ethers.getContractFactory('MarketPlace');

		const mf:MarketPlaceFactory = await MPF.deploy();
		await mf.deployed();

		const tx1 = await mf.connect(addrs[0]).createMarketPlace("hoge", 3);
		const tx2 = await mf.connect(addrs[1]).createMarketPlace("huga", 5);

		const mpAddr1 = await mf.listOfMarketPlaces(0);
		const mpAddr2 = await mf.listOfMarketPlaces(1);

		const mp1 = await MP.attach(mpAddr1);
		const mp2 = await MP.attach(mpAddr2);
		console.log(mp1.address)
		console.log(await mp1.name())
		console.log(await mp1.owner())
		console.log(mp2.address)
		console.log(await mp2.name())
		console.log(await mp2.owner())
	})
})