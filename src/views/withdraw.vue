<template>
  <div class="withdraw-container">
      <div style="display: flex;flex-direction: column;">
          <div class="withdraw-title">
              <img src="../assets/icon-backBlack.png" class="title-img" @click="backChange">
              <span class="title-span">{{$t('withdraw.title')}}</span>
          </div>
          <div class="withdraw-body">
              <div class="body-input">
                  <el-input :placeholder="$t('withdraw.withdraw')" class="input"></el-input>
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
export default {
  name: 'withdraw',
  methods: {
    backChange () {
      this.$router.go(-1)
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
      padding:0 16px;
      justify-content: space-between;
      .withdraw-title{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding:10px 0;
          .title-img{
              width:13px;
              height:22px;
          }
          .title-span{
              font-size:17px;
              color:#444;
              font-weight: bold;
              padding-left:45%;
          }
      }
      .withdraw-body{
          display: flex;
          flex-direction: column;
          margin-top:25px;
          .body-input{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              padding:15px 0;
              border-bottom: 1px solid #eee;
              .input{
                  width:300px;
                  outline:medium;
              }
              .input-text{
                  font-size:15px;
                  color:#4D51C6;
              }
          }
          .body-address{
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              margin-top:25px;
              color:#444;
              font-size:15px;
          }
          .body-btn{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-top:25px;
              border-radius:10px;
              height:50px;
              color:#fff;
              font-size:15px;
              font-weight: bold;
              padding:15px 0;
              background-color: #4D51C6;
              cursor: pointer;
          }
          .body-text{
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
              color:#AFB0B9;
              font-size:12px;
              margin-top:15px;
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
          font-size:12px;
          padding:15px 20px;
          text-align: left;
          margin-bottom:20px;
          .bottom-title{
            font-weight: bold;
          }
          .bottom-list{
              margin-top:5px;
          }
      }
  }

</style>
