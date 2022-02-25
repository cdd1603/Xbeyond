<template>
<transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
</transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'message',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
//['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  //@import "~@/common/style/global.styl"
   // fade动画 <transition name="fade"> </transition>
   // 下面的样式可以自己改
  .fade-enter-active,
  .fade-leave-active{
      transition: opacity .2s
  } 
  .fade-enter,
  .fade-leave-to{
      opacity: 0
  }
  .message{
    position:fixed;
    top:40px;
    text-align:center;
    left:50%;
    transform:translateX(-50%);
    min-width:200px;
    padding:10px 20px;
    // color:red;
    background:#f5f5f5;
    font-size:14px;
    line-height:1.4;
    border-radius:4px;
    z-index:1000;
    box-shadow:0 0 10px rgba(0, 0, 0, .3);
    &.info{
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .3s,transform .4s,top .4s;
      overflow: hidden;
      padding: 15px 15px 15px 20px;
      display: flex;
      align-items: center;
      color: #909399;
    }
    &.success{
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .3s,transform .4s,top .4s;
      overflow: hidden;
      padding: 15px 15px 15px 20px;
      display: flex;
      align-items: center;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      color: #67c23a;
    }
    &.error{
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .3s,transform .4s,top .4s;
      overflow: hidden;
      padding: 15px 15px 15px 20px;
      display: flex;
      align-items: center;
      background-color: #fef0f0;
      border-color: #fde2e2;
      color: #f56c6c;
    }
    &.warning{
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .3s,transform .4s,top .4s;
      overflow: hidden;
      padding: 15px 15px 15px 20px;
      display: flex;
      align-items: center;
      background-color: #fdf6ec;
      border-color: #faecd8;
      color: #e6a23c;
    }
      
  }
    
</style>