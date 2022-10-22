// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './MarketPlace.sol';

contract MarketPlaceFactory {
	event MarketPlaceCreated(address contractAddress);

	function createMarketPlace(string memory _name) external returns(address) {
		MarketPlace newMarketPlace = new MarketPlace(_name, msg.sender);

		emit MarketPlaceCreated(address(newMarketPlace));

		return address(newMarketPlace);
	}
}