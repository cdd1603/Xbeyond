/* eslint-disable */

// import { pinJSONToIPFS } from "./pinata.js";
// require("dotenv").config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const Web3 = require("web3");
const axios = require('axios').default;

//20220128注释 源文件放出来的
const contractABI = require("./abi.json");
const erc721ABI = require("./erc721.json");

// const config = require("../../backend/config.json");
const config = require("./config.json");
const contractAddress = config['xbeyond'];
const baycContractAddress = config['bayc'];
const mintPrice = config['mintPrice'];
const whitelistMintPrice = config['whitelistMintPrice'];


const backendHost = 'http://localhost:3001/'

const Web3Utils = require('web3-utils');
var web3;
if (typeof window !== "undefined") {
  web3 = new Web3(window.ethereum);
}

const checkNetwork = async()=> {
  var netID = await ethereum.request({ method: 'eth_chainId' });
  var networks = {
    "0x1": "MAINNET",
    "0x4": "RINKEBY",
  };
  return networks[netID];
}

const getScan = async()=> {
  var netID = await ethereum.request({ method: 'eth_chainId' });
  var networks = {
    "0x1": "https://etherscan.io",
    "0x4": "https://rinkeby.etherscan.io",
  };
  return networks[netID];
}


async function loadContracts() {
  if (!window.contract) {
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    window.mockBAYCcontract =  await new web3.eth.Contract(erc721ABI, baycContractAddress);
  }  
}

async function sendTransaction(transactionParameters) {
  var baseUrl = await getScan();
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      // status: `View transaction on Etherscan: ${baseUrl}/tx/${txHash}`
      status: `Transcation: ${txHash}`
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 " + error.message,
    };
  }
}


const mockMintERC721 = async(address, tokenID)  => {
  const transactionParameters = {
    to: config.bayc, 
    from: address, 
    // value: Web3Utils.toHex(mintPrice * 1e18),
    data: window.mockBAYCcontract.methods
      .mint(address, tokenID)
      .encodeABI(),
  };
  return (await sendTransaction(transactionParameters));
}

const mint = async(collectionID, tokenID) => {
  await loadContracts();
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: Web3Utils.toHex(mintPrice * 1e18),
    data: window.contract.methods
      .mint(collectionID, tokenID, window.ethereum.selectedAddress)
      .encodeABI(),
  };
  return (await sendTransaction(transactionParameters));
}

const mintWhitelist = async(address, hash, collectionID, tokenID) => {
   loadContracts();
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    value: Web3Utils.toHex(whitelistMintPrice * 1e18),
    data: window.contract.methods
      .whitelistMint(collectionID, tokenID, window.ethereum.selectedAddress, hash)
      .encodeABI(),
  };
  return (await sendTransaction(transactionParameters));
}


const isWhitelist = async(address) => {
    address = Web3.utils.toChecksumAddress(address);
    var res = await axios.get(backendHost + 'whitelist?address=' + address);
    return res.data;
}

const getData = async(address) => {
  await loadContracts();
  address = Web3.utils.toChecksumAddress(address);
  var startTime =  await window.contract.methods.configStartTime().call();
  var endTime =  await window.contract.methods.configEndTime().call();
  return {
    'starTime': startTime,
    'endTime': endTime
  }

}

const getNftsOfOwner = async(contractAddress, ownerAddress) => {
  // var netID = await ethereum.request({ method: 'eth_chainId' });
  const netID = '0x1';
  var apiURL = {
    "0x1": "https://api.etherscan.io",
    "0x4": "https://api-rinkeby.etherscan.io",
  };
  var url = `${apiURL[netID]}/api?module=account&action=tokennfttx&contractaddress=${contractAddress}&address=${ownerAddress}&tag=latest&apikey=52TU4D1JQG5Z8ZSVWGX29SHCRH7KI74KXA`
  var res = await axios.get(url);
  res = res.data;
  res = res['result'];
  let resData = res
  // console.log('resData', resData)
  
  // owner(tokenId) == current address
  var tokens = new Set();
  for (var i = 0; i < res.length; i ++) {
    var trx =res[i];
    if (trx['to'] == ownerAddress.toLowerCase()) {
      tokens.add(trx['tokenID']);
    } else if (trx['from'] == ownerAddress.toLowerCase()) {
      tokens.delete(trx['tokenID']);
    }
  }
  
  let filterData = []
  tokens.forEach((item,index)=>{
    resData.forEach((val,i)=>{
      if(item == val.tokenID){
        filterData.push(val)
      }
    })
  })
  return filterData
  // return res 
}

const exmapleGetNFTOwnedByUser = async() => {
    const BAYC = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
    const MAYC = '0x60e4d786628fea6478f785a6d7e704777c86a7c6';
    const Rests = '0xdaeecd365bcec74656bd4068879db469e815641d';
    const test_bayc_owner = '0x4ab16a42c6d06aed8bf46911267c40afc37e2270';
    const test_mayc_owner = '0x95dfdf0306945282016eb50212edf82054c00f96';
    const list_bayc =  await getNftsOfOwner(BAYC, test_bayc_owner);
    const list_mayc =  await getNftsOfOwner(MAYC, test_mayc_owner);
    console.log('list bayc', list_bayc);
    console.log('list mayc', list_mayc);
}

const isOwnerOf = async(address,tokenid) => {

}

const supportParentNFTArr= [
  { 
    name:'BAYC',
    contractType:'0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', //bayc 合约
    defaultImg:'ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/',
    imageName:'image' //图片字段名
  },
  {
    name:'MAYC',
    contractType:'0x60e4d786628fea6478f785a6d7e704777c86a7c6', //MAYC
    defaultImg:'https://boredapeyachtclub.com/api/mutants/',
    imageName:'image',
    prefix:false
  },
  {
    name:'SSC',
    contractType:'0x48c58b8496642bc4c860c7efc13813b73aa674f7', //SSC
    defaultImg:'ipfs/bafybeicp22ucuhe3rhtxhknqfocr5oez6utxqhzx2pfu7v3qwp5gh6pnwe/',
    imageName:'image'
  }
]

const exmapleCheckIsWhitlist = async() => {
    console.log("11111", await isWhitelist('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199')); // should print out hash
    console.log("2222",await isWhitelist('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')); // false
}

//基于获取到的parentnft id检查钱包中对应编号是否被mint过
const getTokenURI = async(tokenID) => {
  await loadContracts();
  let str = 10000000000
  let id = str + Number(tokenID)
  let num 
  // console.log('1123',window.contract.methods.ownerOf(2662))
  await window.contract.methods.tokenURI(id).call().then(res=>{
     num = 1
     // mint 过
  }).catch(error =>{
     num = 0
     //没有mint 过
  })
  // console.log('num',num)
  return num
}

//后台存储地址
const api = 'http://www.xbeyond.io:8081/userAddress/save'




// (async () => {
//   await exmapleGetNFTOwnedByUser();
//   await exmapleCheckIsWhitlist();

// })().catch(e => {
// });

module.exports = {
   mockMintERC721,
   mint,
   mintWhitelist,
   isWhitelist,
   getNftsOfOwner,
   getData,
   exmapleGetNFTOwnedByUser,
   getTokenURI,
   supportParentNFTArr,
   api
}