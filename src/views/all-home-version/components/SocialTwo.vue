<template>
  <ul
    class="
      social-share
      social-style--2
      color-black
      d-flex
      justify-content-start
      liststyle
    "
  >
    <!-- <li v-for="(social, i) in socialList" :key="i">
      <a :href="social.url" target="_blank"
        ><i class="fab" :class="social.icon"></i
      ></a>
    </li> -->
    <!-- <li style="width:24px;height:24px;">
      <img src="../image/1.png" alt="" class="fab"/>
    </li>
    <li style="width:24px;height:34px;">
      <img src="../image/2.png" alt="" class="fab"/>
    </li>
    <li style="width:24px;height:24px;">
      <img src="../image/3.png" alt="" class="fab"/>
    </li>
    <li class="move" @click="connect" >
      <div class='connect_wallet'>
        {{str}}
      </div>
    </li> -->
     <li v-for="(item, i) in socialList" :key="i">
      <a href='#' target="_blank">
        <img :src='item.icon' alt="" class="fab" style='width:24px;height:24px'>
      </a>
    </li>
    <li class="move" @click="connect" v-if='isShow'>
      <div class='connect_wallet'>
        {{displayAddress(walletAddress)}}
      </div>
    </li>
  </ul>
</template>
<script>
import { getCurrentWalletConnected } from "../../../utils/interact";
import { getNftsOfOwner,getTokenURI,exmapleGetNFTOwnedByUser,supportParentNFTArr} from '../../../utils/interact_contract.js'
import Web3 from "web3";
const collectionIDs = {
    'BAYC': 1,
    'MAYC': 2,
}
export default {
  data() {
    return {
      socialList: [
        {
          icon: require('../image/Logomark-Transparent White.svg'),
          url: "https://www.facebook.com/",
        },
        {
          icon: require("../image/discord.svg"),
          url: "https://www.linkedin.com/",
        },
        {
          icon: require("../image/twitter.svg"),
          url: "https://twitter.com/",
        },
        // {
        //   icon: "fa-instagram",
        //   url: "https://instagram.com/",
        // },
      ],
      //连接metamask 所需参数
      walletAddress: "",
      status: "",
      web3: null,
      MetaMaskId: "1", // main net netID
      netID: "1", // user metamask id
      MetaMaskAddress: "", // user Address
      Web3Interval: null,
      AccountInterval: null,
      NetworkInterval: null,
      stateLog: null,
      isComplete: false,
      type: "INIT",
      MetamaskMsg: {
        LOAD_MATAMASK_WALLET_ERROR: "Loading metamask error, please try later",
        EMPTY_METAMASK_ACCOUNT:
          "Please log in to your metamask to continue with this app.",
        NETWORK_ERROR: "The connection is abnormal, please try again",
        METAMASK_NOT_INSTALL: "Please install metamask for this application",
        METAMASK_TEST_NET: "Currently not in the main network.",
        METAMASK_MAIN_NET: "Currently Main network",
        USER_DENIED_ACCOUNT_AUTHORIZATION: "User denied account authorization",
      },
      getimageUrl:'https://ipfs.io/',
      imageDefault:'https://ipfs.io/ipfs/',
      imageUrl:'',
      str:'Connect Wallet',
      tokenidArr:[],
      imageArr:[],
      isShow:false,
      isOk:true,
      collectionID: 'BAYC',
    };
  },
  methods: {
     displayAddress(walletAddress)  {
       window.address = walletAddress;
        return walletAddress.length > 0 ? (
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              "Connect Wallet"
            );
    },
    async connect() {
      const { address, status } = await getCurrentWalletConnected(); //获取登录的账号和 登录的状态
      this.walletAddress = address;
      this.$emit('walletAddress',this.walletAddress)
      this.status = status;
      this.addWalletListener(); //切换账号的时候触发,获取登录的账号
      let accounts
      if (window.ethereum) {
        let ethereum = window.ethereum;
        window.web3 = new Web3(ethereum);
        try {
          accounts = await ethereum.enable(); //获取用户授权
          this.web3TimerCheck(window.web3);
        } catch (error) {
          this.Log(
            this.MetamaskMsg.USER_DENIED_ACCOUNT_AUTHORIZATION,
            "USER_DENIED_ACCOUNT_AUTHORIZATION"
          );
        }
        // let obj = exmapleGetNFTOwnedByUser()
        if(this.imageArr.length == 0 && accounts.length > 0){
        this.imageArr = []
        supportParentNFTArr.forEach(res=>{
          let arr = getNftsOfOwner(res.contractType,this.walletAddress)
          arr.then((result)=>{
             if(result.length>0){
                result.forEach(item => {
                    getTokenURI(item.tokenID).then(t =>{
                      if (t == 0){
                         //没有mint 过
                        let str=res.defaultImg+item.tokenID
                        let getimageurl
                        if(res.prefix == false){
                          getimageurl = str
                        }else{
                          getimageurl = this.getimageUrl+str
                        }
                        this.getimage(getimageurl,item,res.imageName)
                      } else if(t == 1){
                        item.isMint = true
                        let str=res.defaultImg+item.tokenID
                        let getimageurl
                        if(res.prefix == false){
                          getimageurl = str
                        }else{
                          getimageurl = this.getimageUrl+str
                        }
                        this.getimage(getimageurl,item,res.imageName)
                      }
                    })
                });
             }
          })
        }) 
        }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        this.web3TimerCheck(window.web3);
      } else {
        this.web3 = null;
        this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
        console.error(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    },
    getimage(url,item,imageName){
      this.$axios.get(url).then(res=>{
        let image = res.data[imageName]
        let splitimage = image.split('//')[1]
        item.imageurl = this.imageDefault + splitimage
        this.imageArr.push(item)
        this.$emit('getimageUrl',{image:this.imageArr})
      })
    },
    addWalletListener() {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            this.walletAddress = accounts[0];
          } else {
            this.walletAddress = "";
          }
        });
      } else {
        this.status =
          "You must install Metamask, a virtual Ethereum wallet, in your browser";
      }
    },
    web3TimerCheck(web3) {
      this.web3 = web3;
      this.checkAccounts(); //获取当前节点持有的账户列表
      this.checkNetWork();
      this.Web3Interval = setInterval(() => this.checkWeb3(), 1000);
      this.AccountInterval = setInterval(() => this.checkAccounts(), 1000);
      this.NetworkInterval = setInterval(() => this.checkNetWork(), 1000);
    },
    Log(msg, type = "") {
      const letType = type;
      if (letType === this.type) return;
      const message = this.userMessage === "null" ? msg : this.userMessage;
      this.type = type;
      // this.$emit("onComplete", {
      //   web3: this.web3,
      //   type,
      //   metaMaskAddress: this.MetaMaskAddress,
      //   message,
      //   netID: this.netID,
      // });
    },
    checkAccounts() {
      if (this.web3 === null) return;
      this.web3.eth.getAccounts((err, accounts) => {
        if (err != null)
          return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
        if (accounts.length === 0) {
          this.MetaMaskAddress = "";
          this.Log(this.MetamaskMsg.EMPTY_METAMASK_ACCOUNT, "NO_LOGIN");
          return;
        }
        this.MetaMaskAddress = accounts[0]; // user Address
      });
    },

    async checkNetwork(){
       var netID = await ethereum.request({ method: 'eth_chainId' });
        var networks = {
          "0x1": "MAINNET",
          "0x4": "RINKEBY",
        };
        return networks[netID];
    }

  },
   mounted() {
    if(this.$route.name == 'mint' || this.$route.name == 'redeemPage'){
      this.isShow = true
      this.connect()
    }else if(this.$route.name == 'officialWebsite'){
       this.isShow = false
    }
  },
};
</script>
<style lang="scss" scoped>
.connect_wallet{
  border:1px solid #787878;
  border-radius: 30px;
  text-align: center;
  line-height: 20px;
  padding:5px 15px;
  margin-top:-10px;
  width: 150px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  // margin-top:0px !important;
  @media (max-width:600px){
     display: none;
  }
}
.fab{
  margin-top:-8px;
}
.move{
  cursor: pointer;
  // width: 139px;
    @media (max-width:600px){
       width: 24px;
       height:24px;
       background-image: url(../image/4.png);
       background-position: center center;
       background-repeat: no-repeat;
       background-size: 20px 20px;
       margin-top:-8px !important;
    }
   
}
</style>
