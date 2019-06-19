<template>
    <el-scrollbar style="background-color: #4D51C6">
        <div class="invite2-container">
            <div class="invite-top">
                <div class="logo">
                    <div class="top-logo">
                        <img src="../assets/icon-logo.png" class="logo-right">
                        <div class="logo-left">
                            <span class="left-title">True</span>
                            <span class="left-text">{{$t('invite.logoText')}}</span>
                        </div>
                    </div>
                    <el-dropdown  trigger="click">
                        <div class="top-btn">
                            <img src="../assets/icon-lang.png" class="btn-img">
                            <span style="padding-left:5px;">{{$t('invite.lang1')}}</span>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>{{$t('invite.lang1')}}</el-dropdown-item>
                            <el-dropdown-item>{{$t('invite.lang2')}}</el-dropdown-item>
                            <el-dropdown-item>{{$t('invite.lang3')}}</el-dropdown-item>
                            <el-dropdown-item>{{$t('invite.lang4')}}</el-dropdown-item>
                            <el-dropdown-item>{{$t('invite.lang5')}}</el-dropdown-item>
                            <el-dropdown-item>{{$t('invite.lang6')}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="top-text">
                    <span>{{$t('invite.logoText2')}}</span>
                    <span style="padding-top:17px;">TRUE</span>
                </div>
            </div>
            <div class="invite-body">
                <div class="body-form">
                    <div class="form-text">
                        <span class="text-blue">Ryan梅</span>
                        <span class="text">{{$t('invite.formText')}}</span>
                    </div>
                    <div class="form-body">
                        <div class="body-bar">
                            <!--邮箱注册-->
                            <div class="bar-list" @click="barChange(1)">
                                <span :class="barPhone ? 'blue' : ''" :style="barMail? 'padding-bottom:8px;' : ''">{{$t('invite.register')}}</span>
                                <div class="list-blue" v-if="barPhone"></div>
                            </div>
                            <!--手机注册-->
                            <div class="bar-list margin" @click="barChange(2)">
                                <span :class="barMail ? 'blue' : ''" :style="barPhone ? 'padding-bottom:8px;' : ''">{{$t('invite.register2')}}</span>
                                <div class="list-blue" v-if="barMail"></div>
                            </div>
                        </div>
                        <div class="bar-phone">
                            <!--邮箱-->
                            <div class="phone-input" v-if="barPhone">
                                <el-input v-model="form.email" :placeholder="$t('invite.email')"></el-input>
                            </div>
                            <!--手机号-->
                            <div class="phone-input" v-if="barMail">
                                <el-input v-model="form.areaCode" style="width:120px;"></el-input>
                                <div class="input-color"></div>
                                <el-input v-model="form.phone" :placeholder="$t('invite.phone')"></el-input>
                            </div>
                            <!--邮箱验证码-->
                            <div class="phone-input margin" v-if="barPhone">
                                <el-input v-model="form.mailCode" :placeholder="$t('invite.emailCode')" style="width:180px"></el-input>
                                <div class="input-color"></div>
                                <span class="input-text">{{$t('invite.getCode')}}</span>
                            </div>
                            <!--手机验证码-->
                            <div class="phone-input margin" v-if="barMail">
                                <el-input v-model="form.phoneCode" :placeholder="$t('invite.phoneCode')" style="width:180px"></el-input>
                                <div class="input-color"></div>
                                <span class="input-text">{{$t('invite.getCode')}}</span>
                            </div>
                            <!--密码-->
                            <div class="phone-input margin">
                                <el-input v-model="form.password" :placeholder="$t('invite.password')"></el-input>
                            </div>
                            <!--确认密码-->
                            <div class="phone-input margin">
                                <el-input v-model="form.confimPassword" :placeholder="$t('invite.confim')"></el-input>
                            </div>
                            <div class="form-btn">{{$t('invite.submit')}}</div>
                        </div>
                        <div class="body-text">
                            <span>点击注册即表示同意</span>
                            <span class="text-blue">{{$t('invite.tip')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="invite-bottom">
            <img src="../assets/icon-we.png" class="title-img">
            <div class="bottom-list">
                <img src="../assets/icon-bottom1.png" class="list-img">
                <div class="list-text1">{{$t('invite.text1-1')}}</div>
                <div class="list-text2">{{$t('invite.text1-2')}}</div>
            </div>
            <div class="bottom-list">
                <img src="../assets/icon-bottom2.png" class="list-img">
                <div class="list-text1">{{$t('invite.text2-1')}}</div>
                <div class="list-text2">{{$t('invite.text2-2')}}</div>
            </div>
            <div class="bottom-list">
                <img src="../assets/icon-bottom3.png" class="list-img">
                <div class="list-text1">{{$t('invite.text3-1')}}</div>
                <div class="list-text2">{{$t('invite.text3-2')}}</div>
            </div>
        </div>
        <div class="invite-app" v-if="appStatus">
            <div class="app-close">
                <img src="../assets/icon-close.png" class="close-img" @click="closeChange">
            </div>
            <div class="app-body">
                <div class="app-left">
                    <img src="../assets/icon-app.png" class="left-img">
                    <span style="padding-left:10px;padding-top:15px;">True</span>
                </div>
                <div class="app-btn">{{$t('invite.app')}}</div>
            </div>

        </div>
    </el-scrollbar>
</template>

<script>
export default {
  name: 'inviteActivity',
  data () {
    return {
      barPhone: true,
      barMail: false,
      form: {
        email: '', //  邮箱
        phone: '', //  手机号
        mailCode: '', //  邮箱验证码
        phoneCode: '', //  手机验证码
        password: '', //  密码
        confimPassword: '', //  确认密码
        areaCode: '+86' // 区号
      },
      appStatus: true
    }
  },
  mounted () {
    const params = {
      mobile: '86+18501356720'
    }
    // login(params).then(res => {
    //   console.log(res, 'llllll')
    // })
  },
  methods: {
    // 切换邮箱手机
    barChange (index) {
      if (index === 1) {
        this.barPhone = true
      } else {
        this.barPhone = false
      }
      if (index === 2) {
        this.barMail = true
      } else {
        this.barMail = false
      }
    },
    closeChange () {
      this.appStatus = false
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
  .invite2-container{
      display: flex;
      flex-direction: column;
      background-color: #4D51C6;
      flex:auto;
      align-items: stretch;
      position: relative;
      .invite-top{
          display: flex;
          flex-direction: column;
          height: 1200px;
          background-image: url('../assets/banner.png');
          background-repeat: no-repeat;
          background-size:100%;
          padding:40px 32px 0 32px;
          .logo{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              .top-logo{
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  align-items: center;
                  .logo-right{
                      width:100px;
                      height:100px;
                  }
                  .logo-left{
                      display: flex;
                      flex-direction: column;
                      justify-content: flex-start;
                      align-items: flex-start;
                      margin-left:20px;
                      .left-title{
                          font-size:40px;
                          color:#fff;
                          font-weight: bold;
                      }
                      .left-text{
                          font-size:28px;
                          color:#fff;
                          padding-top:6px;
                      }
                  }
              }
              .top-btn{
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  /*width:88px;*/
                  /*height:30px;*/
                  border-radius:12px;
                  border:2px solid rgba(255,255,255,1);
                  padding:14px 14px;
                  font-size:24px;
                  color:#fff;
                  .btn-img{
                      width:28px;
                      height:28px;
                  }
              }
          }
          .top-text{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top:84px;
              color:#fff;
              font-size:60px;
              font-weight: bold;
          }
      }
      .invite-body{
          display: flex;
          flex-direction: column;
          padding:50px 0px;
          /*margin:0 17px 0 17px;*/
          position: absolute;
          top:680px;
          left:50px;
          width:650px;
          background-color: #fff;
          box-shadow:0px 2px 4px 0px rgba(77,81,198,1);
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          .form-text{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              color:#444;
              font-size:24px;
              .text-blue{
                  color:#4D51C6;
              }
              .text{
                  padding-left:4px;
              }
          }
          .form-body{
              display: flex;
              flex-direction: column;
              margin-top:50px;
              padding:0 60px;
              .body-bar{
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  border-bottom:2px solid #EAEAF1;
                  .bar-list{
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      color:#444;
                      font-size:30px;
                      font-weight: bold;
                      .list-blue{
                          width:120px;
                          height:4px;
                          background:#4D51C6;
                          border-radius:2px;
                          margin-top:16px;
                      }
                      .blue{
                          color:#4D51C6;
                      }
                  }
                  .margin{
                      margin-left:81px;
                  }
              }
              .bar-phone{
                  display: flex;
                  flex-direction: column;
                  margin-top:40px;
                  .phone-input{
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-start;
                      align-items: center;
                      padding:22px 20px;
                      border-radius:20px;
                      border:2px solid rgba(220,220,228,1);
                      .input-color{
                          width:2px;
                          height:28px;
                          background-color: #DCDCE4;
                      }
                      .input-text{
                          color:#444;
                          font-size:24px;
                          padding-left:20px;
                      }
                  }
                  .margin{
                      margin-top:20px;
                  }
                  .form-btn{
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      margin-top:50px;
                      background:rgba(77,81,198,1);
                      border-radius:20px;
                      color:#fff;
                      font-size:28px;
                      font-weight: bold;
                      padding:24px 0;
                      cursor: pointer;
                  }
              }
              .body-text{
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  margin-top:20px;
                  color:#AFB0B9;
                  font-size:24px;
                  font-weight: bold;
                  .text-blue{
                      color:#4D51C6;
                  }
              }
          }
      }
  }
  .invite-bottom{
        display: flex;
        flex-direction: column;
        margin-top:350px;
        justify-content: center;
        align-items: center;
        padding-bottom:50px;
        .title-img{
            width:350px;
            height:90px;
        }
        .bottom-list{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:72px;
            color:#fff;
            .list-img{
                width:132px;
                height:154px;
            }
            .list-text1{
                font-size:34px;
                font-weight: bold;
            }
            .list-text2{
                font-size:28px;
                padding-top:10px;
            }
        }
    }
  .invite-app{
      display: flex;
      flex-direction: column;
      background-color: #fff;
      .app-close{
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-content: center;
          padding-top:10px;
          padding-right:10px;
          .close-img{
              width:40px;
              height:40px;
              cursor: pointer;
          }
      }
      .app-body{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-content: center;
          padding:20px 30px 46px 30px;
          .app-left{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-content: center;
              color:#4D51C6;
              font-size:30px;
              .left-img{
                  width:100px;
                  height:100px;
                  border-radius:10px;
              }
          }
          .app-btn{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding:7px 30px;
              /*width:92px;*/
              border-radius:16px;
              border:2px solid rgba(77,81,198,1);
              color:#4D51C6;
              font-size:30px;
              cursor: pointer;
          }
      }
  }

</style>
