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
<!--              <div class="list-btn" @click="jumpToDetail">-->
<!--                  <img src="../assets/icon-detail.png" class="btn-img">-->
<!--                  &lt;!&ndash;明细&ndash;&gt;-->
<!--                  <span class="img-span">{{$t('Home.detail')}}</span>-->
<!--              </div>-->
          </div>
          <div class="body-list list-margin">
                <span class="span2">0.00 {{$t('Home.True')}}</span>
<!--                <div class="list-btn" @click="jumpToWithdraw">-->
<!--                    <img src="../assets/icon-out.png" class="btn-img">-->
<!--                    &lt;!&ndash;提取&ndash;&gt;-->
<!--                    <span class="img-span">{{$t('Home.getOut')}}</span>-->
<!--                </div>-->
            </div>
          <div class="body-text">{{$t('Home.middleText')}}:≈￥ 0.00</div>
        </div>
        <div class="home-card">
            <div class="card-span">{{$t('Home.code')}} <span class="card-code">{{inviteCode}}</span></div>
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
                  <span>{{invitePeople}}</span>
                  <span>0.00{{$t('Home.True')}}</span>
              </div>
            </div>
            <div class="bottom-table">
             <div class="table-title">
                 <span>{{$t('Home.InvitePerson')}}</span>
                 <span>{{$t('Home.time')}}</span>
<!--                 <span>{{$t('Home.isName')}}</span>-->
             </div>
             <div class="table-list" v-for="(item, index) in invitees" :key="index">
                 <span>{{item.Phone}}</span>
                 <span>{{item.Time}}</span>
<!--                 <span class="span1">是</span>-->
             </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatPhone, formatMail } from '../utils/index'
import Share from '../components/share'
import NotInvite from '../components/NotInvite'
import NotAdd from '../components/NotAdd'
import NotCopy from '../components/NotCopy'
import wx from 'weixin-js-sdk'
import axios from 'axios'
import moment from 'moment'
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
      mail: '18501356720@163.com',
      phone: '18501356720',
      invitees: [],
      inviteCode: '', // 邀请码
      invitePeople: 0, // 邀请人数
      shareStatus: false,
      notInviteStatus: false, // 实名认证
      notCopy: false, // 未备份
      notAddWallet: false, // 未添加钱包
      appId: 'wx7b26f840396f2d65', // 分享appId必填
      signature: 'f0625e1f3b905d1e0e65e2119c5b84b7', // 分享签名 必填
      timestamp: '', // 分享时间戳 必填
      nonceStr: '', // 分享随机串 必填
      shareDetail: {
        title: '这是测试',
        desc: '这是测试',
        coverUrl: '../assets/icon-logo'
      },
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoiMTU2MzM1IiwibW9iaWxlIjoiODYrMTc2MTEyMjM2NjUiLCJpcCI6IjEyNy4wLjAuMSIsInRpbWUiOjE1NTcwMzk0MDQzOTV9.9--gg9kYzEPy_WPKmcaEPvWKzAsjg4gJc_ifTKfWBpc'
    }
  },
  mounted () {
    this.phone = formatPhone(this.phone)
    this.mail = formatMail(this.mail)
    console.log(this.phone)
    this.timestamp = Date.parse(new Date())
    this.nonceStr = Math.random().toString(36).substring(2)
    console.log(this.timestamp)
    console.log(this.nonceStr)
    this.getDetail()
  },
  methods: {
    //  获取详情˚
    getDetail () {
      axios.post('http://192.168.46.43:8989/invinfo', {}, {
        headers: {'token': this.token}
      }).then(res => {
        console.log(res, 'res')
        if (res.data.code === 0) {
          const data = res.data.data
          this.inviteCode = data.invitation_code // 邀请码
          this.phone = formatPhone(data.phone) // 手机号
          this.invitees = data.invitees // 邀请数组
          this.invitePeople = this.invitees.length // 邀请人数
          this.invitees.forEach(item => {
            item.Phone = formatPhone(item.phone)
            item.Time = moment(Date.parse(item.create_time)).format('YYYY-MM-DD')
          })
        }
      })
    },
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
      wx.ready(function () {
        wx.onMenuShareAppMessage({
          title: '测试',
          desc: '这是测试',
          link: '',
          imgUrl: '',
          success: function () {
            alert('分享成功')
          },
          cancel: function (e) {
            console.log(e, '失败')
          }
        })
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
