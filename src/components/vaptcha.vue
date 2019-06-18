<template>
    <div class="vaptcha-container">
        <div class="vaptcha-body">
            <div class="vaptcha-card">
               <div class="card-title">{{$t('vaptcha.title')}}</div>
               <div class="card-body">
                   <div class="body-title">{{$t('vaptcha.text')}}</div>
                   <img :src="imgBanner" class="body-img">
                    <img src="../assets/icon-true.png"
                         class="body-icon"
                         id="img"
                         @mousedown="down" @touchstart="down"
                         @mousemove="move" @touchmove="move"
                         @mouseup="end" @touchend="end"
                        >
               </div>
            </div>
            <div class="vaptcha-close" @click="closeChange">
                <img src="../assets/icon-vapClose.png" class="close-img" >
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '../utils'
import draggable from 'vue-draggable'
export default {
  name: 'vaptcha',
  data () {
    return {
      phone: '86+18501356720',
      imgBanner: '', // 背景图片
      width: '', // 屏幕宽度
      height: '', // 屏幕高度
      iconHeight: '', // 拖动钻石高度
      iconWidth: '', // 拖动钻石宽度
      hash: '',
      flags: false,
      position: { x: 0, y: 0 },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      xPum: '',
      yPum: ''
    }
  },
  components: {
    draggable
  },
  mounted () {
    this.getBanner()
    this.width = document.documentElement.clientWidth
    this.height = document.documentElement.clientHeight
    this.iconHeight = this.width * 0.85 - 40
    this.iconWidth = (this.width * 0.85 - 40) * 0.75
    console.log(this.width, this.height)
    console.log(this.iconHeight, this.iconWidth)
  },
  methods: {
    closeChange () {
      this.$emit('close')
    },
    getBanner () {
      axios.post(baseUrl + '/generate', {phone: this.phone}).then(res => {
        console.log(res)
        this.imgBanner = res.data.img
        this.hash = res.data.hash
      })
    },
    // 实现移动端拖拽
    down (event) {
      const moveDiv = document.getElementById('img')
      this.flags = true
      let touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      this.position.x = touch.clientX
      this.position.y = touch.clientY
      this.dx = moveDiv.offsetLeft
      this.dy = moveDiv.offsetTop
    },
    move (event) {
      console.log(event, 'event')
      const moveDiv = document.getElementById('img')
      if (this.flags) {
        let touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }
        this.nx = touch.clientX - this.position.x
        this.ny = touch.clientY - this.position.y
        this.xPum = this.dx + this.nx
        this.yPum = this.dy + this.ny
        moveDiv.style.left = this.xPum + 'px'
        moveDiv.style.top = this.yPum + 'px'
        // 阻止页面的滑动默认事件
        document.addEventListener('touchmove"', function () { // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
          event.preventDefault() // jq阻止冒泡事件
          // event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
        }, false)
      }
    },
    // 鼠标释放时候的函数
    end () {
      this.flags = false
      axios.post(baseUrl + '/validate', {
        hash: this.hash,
        x: this.xPum,
        y: this.yPum
      }).then(res => {
        console.log(res, 'chenhcefen')
      })
    }
  }
}
</script>

<style scoped lang="less">
    .vaptcha-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex: auto;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        .vaptcha-body{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top:300px;
            .vaptcha-card{
                display: flex;
                flex-direction: column;
                width:100%;
                border-radius: 10px;
                background:#fff;
                .card-title {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding:30px 0;
                    color:#444;
                    font-size:30px;
                    font-weight: bold;
                }
                .card-body{
                    display: flex;
                    flex-direction: column;
                    padding:0px 30px 40px 30px;
                    position: relative;
                    .body-title{
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        color:#7B7C81;
                        font-size:24px;
                    }
                    .body-img{
                        width:550px;
                        height:416px;
                        margin-top:20px;
                    }
                    .body-icon{
                        width:160px;
                        height:160px;
                        position: absolute;
                        top:35px;
                    }
                }
            }
            .vaptcha-close{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top:30px;
                padding:20px 0;
                .close-img{
                    width:44px;
                    height:44px;
                }
            }
        }
    }
</style>
