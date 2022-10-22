import { ethers } from 'hardhat';
import { expect } from 'chai';
import { MarketPlaceFactory } from '../typechain-types';
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

describe('MarketPalceFactory', () => {
	let marketPlaceFactory: MarketPlaceFactory;
	let deployer: SignerWithAddress;
	let addr1: SignerWithAddress;
	let addr2: SignerWithAddress;

	async function deploy() {
		[ deployer, addr1, addr2 ] = await ethers.getSigners();
		const MarketPlaceFactoryFactory = await ethers.getContractFactory('MarketPlaceFactory');
		marketPlaceFactory = await MarketPlaceFactoryFactory.deploy();
	}

	beforeEach(async () => {
		await deploy();
	})

	describe('新規マケプレの作成', () => {
		it('アドレスの確認', async () => {
			const newMPAddress = await marketPlaceFactory.connect(addr1).callStatic.createMarketPlace("hoge");
			console.log("\t address: ", newMPAddress);
		})
	})
})