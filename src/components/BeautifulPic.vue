<template>
   <div class="pic-container" >
       <div ref="imageDom" style="background-color: #4D51C6">
           <div class="pic-top">
               <div class="top-logo">
                   <img src="../assets/icon-true.png" class="logo-img">
                   <span class="logo-text">TrueChain</span>
               </div>
               <div class="top-body">
                   <span>{{$t('invite.logoText2')}}</span>
                   <span style="padding-top:17px;">TRUE</span>
               </div>
           </div>
           <div class="pic-body">
               <div class="body-text">{{$t('pic.user')}} <span class="user">Ryan梅</span></div>
               <div class="body-text">{{$t('pic.user2')}}</div>
               <div class="body-card">
                   <div class="icon-card">{{$t('pic.InvitationCode')}}</div>
                   <span class="cards">Y 9 8 7 0 9</span>
               </div>
               <qrcode-vue :value="qrCode" :size="size" level="H" style="width:90px;height:90px;margin-top:25px;"></qrcode-vue>
               <div class="body-bottom">
                   <div class="bottom-color"></div>
                   <span style="padding:0 16px;">{{$t('pic.bottom')}}</span>
                   <div class="bottom-color"></div>
               </div>
           </div>
       </div>
      <share-pic v-if="picStatus" @picChange="downLoad" :imgSrc="imgUrl"></share-pic>
<!--      <el-button @click="clickGeneratePicture" style="width:100px;">点击</el-button>-->
<!--      <img :src="imgUrl" style="width:500px;height:600px;">-->
   </div>
</template>

<script>
import html2canvas from 'html2canvas'
import SharePic from '../components/sharePic'
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'BeautifulPic',
  data () {
    return {
      imgUrl: '',
      picStatus: false,
      qrCode: 'Y98709'
    }
  },
  mounted () {
    this.picStatus = true
  },
  components: {
    'share-pic': SharePic,
    'qrcode-vue': QrcodeVue
  },
  methods: {
    clickGeneratePicture () {
      let shareContent = this.$refs.imageDom,
        width = shareContent.clientWidth,
        height = shareContent.clientHeight,
        canvas = document.createElement('canvas'),
        scale = 2
      canvas.width = width * scale
      canvas.height = height * scale
      canvas.style.width = shareContent.clientWidth * scale + 'px'
      canvas.style.height = shareContent.clientHeight * scale + 'px'
      canvas.getContext('2d').scale(scale, scale)
      let opts = {
        scale: scale,
        canvas: canvas,
        logging: false,
        width: width,
        height: height,
        useCORS: true // 【重要】开启跨域配置
      }
      html2canvas(shareContent, opts).then(canvas => {
        // 转成图片，生成图片地址
        this.imgUrl = canvas.toDataURL('image/png')
        console.log(this.imgUrl)
      })
    },
    downLoad () {
      this.clickGeneratePicture()
    }
  }
}
</script>

<style scoped lang="less">
.pic-container{
    display: flex;
    flex-direction: column;
    background-color: #4D51C6;
    flex:auto;
    align-items: stretch;
    height:100vh;
    position: relative;
    .pic-top{
        display: flex;
        flex-direction: column;
        height: 1200px;
        background-image: url('../assets/banner.png');
        background-repeat: no-repeat;
        background-size:100%;
        padding:20px 16px 0 16px;
        .top-logo{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .logo-img{
                width:30px;
                height:30px;
            }
            .logo-text{
                font-size:15px;
                color:#fff;
                padding-left:10px;
            }
        }
        .top-body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color:#fff;
            font-size:30px;
            font-weight: bold;
            margin-top:45px;
        }
    }
    .pic-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:25px 0px;
        position: absolute;
        top:680px;
        left:50px;
        width:650px;
        background-color: #fff;
        box-shadow:0px 1px 4px 0px rgba(77,81,198,1);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .body-text{
            display: flex;
            flex-direction: row;
            color:#444;
            font-size:15px;
            .user{
                font-size:15px;
                color:#4D51C6;
            }
        }
        .body-card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius:8px;
            border:1px solid rgba(77,81,198,1);
            padding:4px;
            margin-top:26px;
            position: relative;
            .cards{
                padding:10px;
                background-color: #4D51C6;
                color:#fff;
                font-size:28px;
                border-radius: 8px;
            }
            .icon-card{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding:4px;
                color:#4D51C6;
                font-size:10px;
                position: absolute;
                top:-10px;
                left:55px;
                background-color: #fff;
                border-radius:5px;
                border:1px solid rgba(77,81,198,1);
                width:42px;
            }

        }
        .card-qr{
            width:90px;
            height:90px;
            margin-top:25px;
        }
        .body-bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-top:10px;
            color:#7B7C81;
            font-size:10px;
            .bottom-color{
                width:27px;
                height:1px;
                background-color: #DCDCE4;
            }
        }
    }
}

</style>
