<template>
  <div class="withdraw-container">
      <!--图形验证-->
      <Vaptcha v-if="vaptchaStatus" @close="closeChange"></Vaptcha>
      <div style="display: flex;flex-direction: column;">
          <div class="withdraw-title">
              <img src="../assets/icon-backBlack.png" class="title-img" @click="backChange">
              <span class="title-span">{{$t('withdraw.title')}}</span>
          </div>
          <div class="withdraw-body">
              <div class="body-input">
                  <el-input :placeholder="$t('withdraw.withdraw')" class="input" v-model="Nums" type="number"></el-input>
                  <span class="input-text">{{$t('withdraw.balance')}} 10.00 {{$t('Home.True')}}</span>
              </div>
              <div class="body-address">
                  <span>{{$t('withdraw.wallet')}}</span>
                  <span style="padding-left:10px;">True 0xd6b9…795e08</span>
              </div>
              <div class="body-btn">{{$t('withdraw.title')}}</div>
              <div class="body-text">
                  <span>{{$t('withdraw.today')}}</span>
                  <span class="text-blue">30</span>
                  <span>{{$t('withdraw.tip')}}</span>
              </div>
          </div>
      </div>
      <div class="withdraw-bottom">
          <div class="bottom-title">{{$t('withdraw.withdrawDesc')}}</div>
          <div class="bottom-list"><span>•</span><span>{{$t('withdraw.text1')}}</span></div>
          <div class="bottom-list"><span>•</span><span>{{$t('withdraw.text2')}}</span></div>
          <div class="bottom-list"><span>•</span><span>{{$t('withdraw.text3')}}</span></div>
      </div>
  </div>
</template>

<script>
import Vaptcha from '../components/vaptcha'
export default {
  name: 'withdraw',
  data () {
    return {
      Nums: '', // input
      vaptchaStatus: false // 验证码
    }
  },
  components: {
    Vaptcha
  },
  mounted () {
    this.vaptchaStatus = true
  },
  methods: {
    backChange () {
      this.$router.go(-1)
    },
    closeChange () {
      this.vaptchaStatus = false
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
  .withdraw-container{
      display: flex;
      flex-direction: column;
      flex:auto;
      align-items: stretch;
      height:100vh;
      padding:0 32px;
      justify-content: space-between;
      .withdraw-title{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding:20px 0;
          .title-img{
              width:26px;
              height:44px;
          }
          .title-span{
              font-size:34px;
              color:#444;
              padding-left:40%;
          }
      }
      .withdraw-body{
          display: flex;
          flex-direction: column;
          margin-top:50px;
          .body-input{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              padding:30px 0;
              border-bottom: 2px solid #eee;
              .input{
                  width:300px;
                  outline:medium;
                  font-size:30px;
              }
              .input-text{
                  font-size:30px;
                  color:#4D51C6;
              }
          }
          .body-address{
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              margin-top:50px;
              color:#444;
              font-size:30px;
          }
          .body-btn{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-top:50px;
              border-radius:10px;
              height:50px;
              color:#fff;
              font-size:30px;
              font-weight: bold;
              padding:30px 0;
              background-color: #4D51C6;
              cursor: pointer;
          }
          .body-text{
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
              color:#AFB0B9;
              font-size:24px;
              margin-top:30px;
              .text-blue{
                  color:#4D51C6;
              }
          }
      }
      .withdraw-bottom{
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background:rgba(246,247,251,1);
          border-radius:10px;
          color:#7B7C81;
          font-size:24px;
          padding:30px 40px;
          text-align: left;
          margin-bottom:40px;
          .bottom-title{
            font-weight: bold;
          }
          .bottom-list{
              margin-top:10px;
          }
      }
  }

</style>
