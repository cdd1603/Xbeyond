/* eslint-disable */

// import { pinJSONToIPFS } from "./pinata.js";
// require("dotenv").config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
import Web3 from "web3";
const Web3Utils = require('web3-utils');
// const web3defualt = require('web3');
// const Web3Utils = web3defualt.utils;

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = new Web3(window.ethereum);
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: "You must install Metamask, a virtual Ethereum wallet, in your browser",
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: ".",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: "You must install Metamask, a virtual Ethereum wallet, in your browser",
    };
  }
};

export const checkNetWork = async()=> {
  var netID = await ethereum.request({ method: 'eth_chainId' });
  var networks = {
    "0x1": "MAINNET",
    "0x4": "RINKEBY",
  };
  return networks[netID];

  // if (err != null)
  //   return "NETWORK_ERROR";
  
  // if (netID == '0x4') {
  //   return "RINKEBY"
  // }
  // if netID === "1":
  //   return this.MetamaskMsg.METAMASK_TEST_NET, "MAINNET";
  // if (this.MetaMaskAddress !== "" && netID === "3")
  //   return this.MetamaskMsg.METAMASK_TEST_NET, "ROPSTEN";
  // if (this.MetaMaskAddress !== "" && netID === "42")
  //   return this.MetamaskMsg.METAMASK_TEST_NET, "LOVAN";
  // if (this.MetaMaskAddress !== "" && netID === "4")
  //   return this.MetamaskMsg.METAMASK_TEST_NET, "RINKEBY";
  
  // return this.MetamaskMsg.METAMASK_MAIN_NET, "MAINNET";
}

