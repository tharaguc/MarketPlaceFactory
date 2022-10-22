// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MarketPlaceFactory {
	uint i = 42;
	function createMarketPlace() public view returns(uint) {
		return i;
	}
}