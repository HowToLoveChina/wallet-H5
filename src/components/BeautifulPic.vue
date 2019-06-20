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
               <qrcode-vue :value="qrCode"  level="H" style="width:90px;height:90px;margin-top:25px;"></qrcode-vue>
               <div class="body-bottom">
                   <div class="bottom-color"></div>
                   <span style="padding:0 16px;">{{$t('pic.bottom')}}</span>
                   <div class="bottom-color"></div>
               </div>
           </div>
       </div>
      <share-pic v-if="picStatus" @picChange="downLoad" @cancel="closeChange" :imgSrc="imgUrl"></share-pic>
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
      let shareContent = this.$refs.imageDom
      let width = shareContent.clientWidth
      let height = shareContent.clientHeight
      let canvas = document.createElement('canvas')
      let scale = 2
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
    },
    closeChange () {
      this.picStatus = false
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
        padding:40px 32px 0 32px;
        .top-logo{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .logo-img{
                width:60px;
                height:60px;
            }
            .logo-text{
                font-size:30px;
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
            font-size:60px;
            font-weight: bold;
            margin-top:80px;
        }
    }
    .pic-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:50px 0px;
        position: absolute;
        top:680px;
        left:50px;
        width:650px;
        background-color: #fff;
        box-shadow:0px 2px 4px 0px rgba(77,81,198,1);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .body-text{
            display: flex;
            flex-direction: row;
            color:#444;
            font-size:30px;
            .user{
                font-size:30px;
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
            margin-top:52px;
            position: relative;
            .cards{
                padding:20px;
                background-color: #4D51C6;
                color:#fff;
                font-size:56px;
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
                top:-15px;
                left:130px;
                background-color: #fff;
                border-radius:10px;
                border:1px solid rgba(77,81,198,1);
            }

        }
        .card-qr{
            width:180px;
            height:180px;
            margin-top:50px;
        }
        .body-bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-top:40px;
            color:#7B7C81;
            font-size:10px;
            .bottom-color{
                width:54px;
                height:2px;
                background-color: #DCDCE4;
            }
        }
    }
}

</style>
