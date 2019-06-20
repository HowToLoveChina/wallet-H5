<template>
    <div class="num-container">
        <div class="num-body">
           <div class="num-title">
               <img src="../assets/icon-close2.png" class="title-img" @click="closeChange">
               <span style="padding-left:135px">{{$t('keyboard.title')}}</span>
           </div>
          <div class="body-inner">
              <div class="inner-text">
                  <div class="text-top">
                      <img src="../assets/icon-mail.png" class="top-img">
                      <span class="top-span">{{$t('keyboard.text1')}}</span>
                  </div>
                  <div class="text-bottom">+86 152****7078</div>
              </div>
              <div  class="inner-input">
                  <div class="input-num" :style="inputList[0] ? 'border-bottom: 2px solid #4D51C6' : ''">
                     <span class="num-span">{{inputList[0]}}</span>
                  </div>
                  <div class="input-num" :style="inputList[1] ? 'border-bottom: 2px solid #4D51C6' : ''">
                      <span class="num-span">{{inputList[1]}}</span>
                  </div>
                  <div class="input-num" :style="inputList[2] ? 'border-bottom: 2px solid #4D51C6' : ''">
                      <span class="num-span">{{inputList[2]}}</span>
                  </div>
                  <div class="input-num" :style="inputList[3] ? 'border-bottom: 2px solid #4D51C6' : ''">
                      <span class="num-span">{{inputList[3]}}</span>
                  </div>
                  <div class="input-num" :style="inputList[4] ? 'border-bottom: 2px solid #4D51C6' : ''">
                      <span class="num-span">{{inputList[4]}}</span>
                  </div>
                  <div class="input-num" :style="inputList[5] ? 'border-bottom: 2px solid #4D51C6' : ''">
                      <span class="num-span">{{inputList[5]}}</span>
                  </div>
<!--                      <div  class="input" @keyup="nextFocus($event,index)"-->
<!--                            @keydown="changeValue(index)" >-->
<!--&lt;!&ndash;                          <span>{{item}}</span>&ndash;&gt;-->
<!--                      </div>-->
              </div>
              <div class="inner-time" >
                  <span v-if="!timeStatus">{{codeMsg}} ({{countdown}}s)</span>
              </div>
              <div class="inner-time" v-if="timeStatus" @click="tryAgain">
                  <span>{{$t('keyboard.time')}}</span>
              </div>
              <div class="inner-btn" v-if="!inputList[5]">{{$t('keyboard.confim')}}</div>
              <div class="inner-btn2" v-if="inputList[5]">{{$t('keyboard.confim')}}</div>
          </div>
          <div class="key-container" @click.stop='_handleKeyPress'>
                <div class='key-row'>
                    <div class='key-cell' data-num='1'>1</div>
                    <div class='key-cell' data-num='2'>2</div>
                    <div class='key-cell' data-num='3'>3</div>
                </div>
                <div class='key-row'>
                    <div class='key-cell' data-num='4'>4</div>
                    <div class='key-cell' data-num='5'>5</div>
                    <div class='key-cell' data-num='6'>6</div>
                </div>
                <div class='key-row'>
                    <div class='key-cell' data-num='7'>7</div>
                    <div class='key-cell' data-num='8'>8</div>
                    <div class='key-cell' data-num='9'>9</div>
                </div>
                <div class='key-row'>
                    <div class='key-cell-null' data-num='-1'></div>
                    <div class='key-cell' data-num='0'>0</div>
                    <div class='key-cell-null' >
                        <img src="../assets/icon-delete.png" class="null-img" data-num='10'>
                    </div>
                </div>
            </div>
<!--          <NumberKey></NumberKey>-->
        </div>
    </div>
</template>

<script>
import SecurityCode from 'vue-security-code'
export default {
  name: 'keyboardNum',
  components: {
    SecurityCode
  },
  data () {
    return {
      inputList: [], // 数字键盘输入数组
      timeStatus: false, // 重新发送的时间状态
      // 倒计时秒数
      countdown: 60,
      // 按钮上的文字
      codeMsg: this.$t('keyboard.time2'), // 已发送
      // 定时器
      timer: null
    }
  },
  props: {
  },
  mounted () {
    // document.activeElement.blur() // ios隐藏键盘
    // this.$refs.input.blur() // android隐藏键盘
    this.getCode()
  },
  methods: {
    getCode () {
      // 验证码60秒倒计时
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--
            if (this.countdown !== 0) {
              this.codeMsg = this.$t('keyboard.time2')
            } else {
              clearInterval(this.timer)
              this.countdown = 60
              this.timeStatus = true
              this.timer = null
            }
          }
        }, 1000)
      }
    },
    closeChange () {
      this.$emit('closeChange')
    },
    tryAgain () {
      this.timeStatus = false
      this.getCode()
    },
    nextFocus (el, index) {
      let dom = document.getElementsByClassName('input')
      let currInput = dom[index]
      let nextInput = dom[index + 1]
      let lastInput = dom[index - 1]
      // 这里的keyCode 根据不同的平台或许不同,安卓就是不是8
      if (el.keyCode !== 8) {
        if (index < (this.inputList.length - 1)) {
          nextInput.focus()
        } else {
          currInput.blur()
        }
      } else {
        if (index !== 0) {
          lastInput.focus()
        }
      }
    },
    // 当键盘按下的时候清空原有的数
    changeValue (index) {
      this.inputList[index].val = ''
    },
    // 处理按键
    _handleKeyPress (e) {
      let num = e.target.dataset.num
      console.log(e.target.dataset)
      console.log(num, '测试')
      // 不同按键处理逻辑
      // -1 代表无效按键，直接返回
      if (num === '-1') return false
      switch (String(num)) {
        // 删除键
        case '10':
          this._handleDeleteKey(num)
          break
        default:
          this._handleNumberKey(num)
          break
      }
    },
    // 处理删除键
    _handleDeleteKey (num) {
      console.log(num)
      // 如果没有输入，直接返回
      console.log(1)
      console.log(this.inputList.length)
      if (!this.inputList.length) return false
      // 否则删除最后一个
      this.inputList = this.inputList.splice(0, this.inputList.length - 1)
    },
    _handleNumberKey (num) {
      // console.log(num, '时间时间')
      if (this.inputList.length <= 5) {
        this.inputList.push(num)
      } else {
        this.inputList = []
      }
    }
  }
}
</script>

<style lang="less">
    .el-input__inner {
        border-top-width: 0px !important;
        border-left-width: 0px !important;
        border-right-width: 0px !important;
        border-bottom-width: 0px !important;
        /*outline: medium;*/
    }
.num-container{
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
    .num-body{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin-top:270px;
        width:100%;
        .num-title{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-size:30px;
            font-weight: bold;
            padding:34px 16px 0 16px;
            .title-img{
                width:40px;
                height:40px;
            }
        }
        .body-inner{
            display: flex;
            flex-direction: column;
            margin-top:42px;
            .inner-text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .text-top{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    .top-img{
                        width:32px;
                        height:20px;
                    }
                    .top-span{
                        color:#AFB0B9;
                        font-size:28px;
                        padding-left:10px;
                    }
                }
                .text-bottom{
                    margin-top:10px;
                    color:#444444;
                    font-size:28px;
                }
            }
            .inner-input{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                margin-top:100px;
                .input-num{
                    width:80px;
                    padding:5px;
                    border-bottom: 2px solid #eee;
                    .num-span{
                        font-size:30px;
                        color:#4D51C6;
                        font-weight: bold;
                    }
                }
                .input-num2{
                    width:80px;
                    padding:5px;
                }
                .input{
                    width: 40px;
                    font-size: 30px;
                    border: 0 !important
                }
            }
            .inner-time{
                margin-top:30px;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                padding: 0 17px;
                color:#AFB0B9;
                font-size:30px;
                font-weight: bold;
            }
            .inner-btn{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 50px 16px;
                padding: 30px 0;
                font-size:30px;
                color:#fff;
                background-color: #eee;
                border-radius:20px;
                cursor: pointer;
            }
            .inner-btn2{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 50px 16px;
                padding: 30px 0;
                font-size:30px;
                color:#fff;
                background-color: #4D51C6;
                border-radius:20px;
                cursor: pointer;
            }
        }
        .key-container{
            display: flex;
            flex-direction: column;
            width:100%;
            margin-top:100px;
            background-color: #D2D5DB;
            padding-top:12px;
            .key-row{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                .key-cell {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width:230px;
                    height:92px;
                    box-shadow:0px 2px 0px 0px rgba(132,134,136,1);
                    border-radius:10px;
                    margin:0 12px 12px 12px;
                    color:#000;
                    font-size:30px;
                    font-weight: bold;
                    background-color: #fff;
                    cursor: pointer;
                }
                .key-cell-null{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width:230px;
                    height:92px;
                    margin:0 12px 12px 12px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
