<template>
    <div class="detail-container">
        <div class="detail-title">
            <img src="../assets/icon-backBlack.png" class="title-img" @click="backChange">
            <span class="title-span">{{$t('detail.title')}}</span>
        </div>
        <div class="detail-card">{{$t('detail.cardText')}}</div>
        <div class="detail-list">
            <div class="list-right">
                <span class="right-text">{{$t('detail.invite')}}</span>
                <span class="right-time">2019-06-01 12:12:00</span>
            </div>
            <div class="list-left">
                <span class="blue">+0.1 TRUE</span>
            </div>
        </div>
        <div class="detail-list">
            <div class="list-right">
                <span class="right-text">{{$t('detail.invite2')}}</span>
                <span class="right-time">2019-06-01 12:12:00</span>
            </div>
            <div class="list-left">
                <span class="red">+0.1 TRUE</span>
            </div>
        </div>
        <div class="detail-list">
            <div class="list-right">
                <span class="right-text">{{$t('detail.invite3')}}</span>
                <span class="right-time">2019-06-01 12:12:00</span>
            </div>
            <div class="list-left">
                <span class="blue">+0.1 TRUE</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    backChange () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
    .detail-container{
        display: flex;
        flex-direction: column;
        padding:0 32px;
        .detail-title{
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
                color:#444;
                font-size:34px;
                padding-left:40%;
            }
        }
        .detail-card{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding:20px;
            border-radius:8px;
            background-color: #F8B039;
            margin:50px 140px 0 140px;
            color:#fff;
            font-size:28px;
        }
        .detail-list{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top:56px;
            padding:28px 32px;
            .list-right{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                .right-text{
                    color:#444;
                    font-size:28px;
                    font-weight: bold;
                }
                .right-time{
                    color:#AFB0B9;
                    font-size:24px;
                    padding-top:10px;
                }
            }
            .list-left{
                font-size:30px;
                font-weight: bold;
                .blue{
                  color:#4D51C6;
                }
                .red{
                  color:#DE5252;
                }
            }
        }
    }

</style>
