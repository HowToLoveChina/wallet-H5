<template>
    <div class="home-container">
        <!--首页分享好友-->
        <share v-if="shareStatus"
               @cancel="closeChange"
               @picChange="picChange"
               @shareWx="shareWxChange"
        ></share>
        <!--身份认证-->
        <not-invite v-if="notInviteStatus" @cancel="closeChange2"></not-invite>
        <!--添加钱包-->
        <not-add v-if="notAddWallet"></not-add>
        <!--备份-->
        <not-copy v-if="notCopy"></not-copy>
        <div class="home-title">
            <img src="../assets/icon-back.png" class="title-img">
            <div class="title-right">
                <span class="right-span1">{{$t('Home.title')}}</span>
                <!--活动说明-->
                <span class="right-span2" @click="jumpToDesc">{{$t('Home.text')}}</span>
            </div>
        </div>
        <div class="home-body">
          <div class="body-list">
              <span class="span1">{{phone}}</span>
              <div class="list-btn" @click="jumpToDetail">
                  <img src="../assets/icon-detail.png" class="btn-img">
                  <!--明细-->
                  <span class="img-span">{{$t('Home.detail')}}</span>
              </div>
          </div>
          <div class="body-list list-margin">
                <span class="span2">0.50 {{$t('Home.True')}}</span>
                <div class="list-btn" @click="jumpToWithdraw">
                    <img src="../assets/icon-out.png" class="btn-img">
                    <!--提取-->
                    <span class="img-span">{{$t('Home.getOut')}}</span>
                </div>
            </div>
          <div class="body-text">{{$t('Home.middleText')}}:≈￥ 3.00</div>
        </div>
        <div class="home-card">
            <div class="card-span">{{$t('Home.code')}} <span class="card-code">PY8888</span></div>
            <div class="card-btn" @click="shareChange">{{$t('Home.invite')}}</div>
        </div>
        <div class="home-bottom">
            <div class="bottom-title" @click="jumpToInvite">{{$t('Home.myInvite')}}</div>
            <div class="bottom-person">
              <div class="person-title">
                  <span>{{$t('Home.personNum')}}</span>
                  <span>{{$t('Home.coinNum')}}</span>
              </div>
              <div class="person-body">
                  <span>1000</span>
                  <span>0.1 {{$t('Home.True')}}</span>
              </div>
            </div>
            <div class="bottom-table">
             <div class="table-title">
                 <span>{{$t('Home.InvitePerson')}}</span>
                 <span>{{$t('Home.time')}}</span>
                 <span>{{$t('Home.isName')}}</span>
             </div>
             <div class="table-list">
                 <span>{{phone}}</span>
                 <span>2019-05-11</span>
                 <span class="span1">是</span>
             </div>
                <div class="table-list">
                    <span>{{phone}}</span>
                    <span>2019-05-11</span>
                    <span class="span1">是</span>
                </div>
                <div class="table-list">
                    <span>{{phone}}</span>
                    <span>2019-05-11</span>
                    <span class="span1">是</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatPhone } from '../utils/index'
import Share from '../components/share'
import NotInvite from '../components/NotInvite'
import NotAdd from '../components/NotAdd'
import NotCopy from '../components/NotCopy'
import wx from 'weixin-js-sdk'
export default {
  name: 'InviteHome',
  components: {
    'share': Share,
    'not-invite': NotInvite,
    'not-add': NotAdd,
    'not-copy': NotCopy
  },
  data () {
    return {
      phone: '18501356720',
      shareStatus: false,
      notInviteStatus: false, // 实名认证
      notCopy: false, // 未备份
      notAddWallet: false, // 未添加钱包
      appId: '1', // 分享appId必填
      signature: '21212', // 分享签名 必填
      timestamp: '323', // 分享时间戳 必填
      nonceStr: '434', // 分享随机串 必填
      shareDetail: {
        title: '这是测试',
        desc: '这是测试',
        coverUrl: '../assets/icon-logo'
      }
    }
  },
  mounted () {
    this.phone = formatPhone(this.phone)
    console.log(this.phone)
  },
  methods: {
    // 分享微信
    shareWxChange () {
      wx.config({
        debug: true, // 开启调试模式
        appId: this.appId, // 必填,公众号的唯一标识
        timestamp: this.timestamp, // 必填,生成签名的时间戳
        signature: this.signature, // 必填, 签名
        nonceStr: this.nonceStr, // 必填, 生成签名的随机字符串
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填, 需要使用的JS接口列表
      })

      wx.onMenuShareAppMessage({
        title: this.shareDetail.title,
        desc: this.shareDetail.desc,
        link: '',
        imgUrl: this.shareDetail.coverUrl,
        success: function () {
          alert('分享成功')
        },
        cancel: function (e) {
          console.log(e, '失败')
        }
      })
    },
    // 跳转活动说明
    jumpToDesc () {
      this.$router.push('/description')
    },
    // 跳转提取
    jumpToWithdraw () {
      this.$router.push('/withdraw')
    },
    // 跳转明细
    jumpToDetail () {
      this.$router.push('/detail')
    },
    // 跳转钱包着陆
    jumpToInvite () {
      this.$router.push('/invite')
    },
    // 分享界面
    shareChange () {
      this.shareStatus = true
      console.log('kk')
    },
    // 关闭分享界面
    closeChange () {
      this.shareStatus = false
    },
    // 关闭实名认证界面
    closeChange2 () {
      this.notInviteStatus = false
    },
    // 生成美图
    picChange () {
      this.$router.push('/pic')
    }
  }
}
</script>

<style scoped lang="less">
    .home-container{
        display: flex;
        flex-direction: column;
        .home-title{
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #4E52C7;
            color:#fff;
            padding:20px 32px;
            .title-img{
                width:26px;
                height:42px;
            }
            .title-right{
                display: flex;
                flex-direction: row;
                flex:1;
                justify-content: space-between;
                align-items: center;
                margin-left:38%;
                .right-span1{
                    font-size:30px;

                }
                .right-span2{
                    font-size:25px;
                    cursor: pointer;
                }
            }
        }
        .home-body{
            display: flex;
            flex-direction: column;
            padding:50px 32px 110px 32px;
            background-color: #4E52C7;
            .body-list{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color:#fff;
                .span1{
                    font-size:28px;
                }
                .span2{
                    font-size:64px;
                    font-weight: bold;
                }
                .list-btn{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width:80px;
                    height:30px;
                    border-radius:6px;
                    border:2px solid #fff;
                    padding:5px 16px;
                    cursor: pointer;
                    font-size:20px;
                    .btn-img{
                        width:24px;
                        height:28px;
                    }
                    .img-span{
                        padding-left:7px;
                    }
                }
            }
            .list-margin{
                margin-top:17px;
            }
            .body-text{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                font-size:24px;
                color:#fff;
                margin-top:10px;
                margin-bottom:25px;
            }
        }
        .home-card{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin:-60px 32px 0 32px;
            padding:32px 30px;
            background-color: #fff;
            box-shadow:0px 2px 15px 2px rgba(78,82,199,0.15);
            border-radius: 10px;
            .card-span{
                font-size:28px;
                color:#444;
                .card-code{
                    font-size:40px;
                    color:#4D51C6;
                    font-weight: bold;
                }
            }
            .card-btn{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding:15px 22px;
                width:100px;
                height:20px;
                border-radius:6px;
                background-color: #4D51C6;
                color:#fff;
                font-size:20px;
                cursor: pointer;
            }
        }
        .home-bottom{
            display: flex;
            flex-direction: column;
            padding:70px 32px 50px 32px;
            .bottom-title{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                font-size:40px;
                color:#444;
                font-weight: bold;
            }
            .bottom-person{
                display: flex;
                flex-direction: column;
                margin-top:50px;
                padding:30px 0 34px 0;
                box-shadow:0px 2px 15px 2px rgba(78,82,199,0.15);
                border-radius:10px;
                .person-title{
                    display: flex;
                    flex-direction: row;
                    justify-content:space-around;
                    align-items: center;
                    font-size:24px;
                    color:#7B7C81;
                }
                .person-body{
                    display: flex;
                    flex-direction: row;
                    justify-content:space-around;
                    align-items: center;
                    font-size:30px;
                    font-weight: bold;
                    color:#4D51C6;
                    margin-top:24px;
                }
            }
            .bottom-table{
                display: flex;
                flex-direction: column;
                margin-top:24px;
                padding:30px 0 40px 0;
                box-shadow:0px 2px 15px 2px rgba(78,82,199,0.15);
                border-radius:10px;
                .table-title{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    color:#7B7C81;
                    font-size:24px;
                }
                .table-list{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    color:#444;
                    font-size:28px;
                    margin-top:40px;
                    .span1{
                        padding-right:50px;
                    }
                }
            }
        }
    }
</style>
