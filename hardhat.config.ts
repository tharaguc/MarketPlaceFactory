import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    // testnet: {
    //   url: "",
    //   accounts: [`0x${PRIVATE_KEY}`]
    // }
  }
};

export default config;
