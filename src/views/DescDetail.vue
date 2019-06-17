<template>
  <div class="desc-container">
      <div class="desc-title">
          <img src="../assets/icon-backBlack.png" class="title-img" @click="backChange">
          <span class="desc-span">{{$t('Desc.title')}}</span>
      </div>
      <div class="desc-top">
          <div class="top-title">{{$t('Desc.activeTime')}}</div>
          <div class="top-text">2019年6月15日-2019年7月15日</div>
      </div>
      <div class="desc-body">
          <div class="body-title">{{$t('Desc.rules')}}</div>
          <div class="body-list">
             <div class="list-text">{{$t('Desc.text1')}}</div>
             <div class="list-text">{{$t('Desc.text2')}}</div>
             <div class="list-text">{{$t('Desc.text3')}}</div>
             <div class="list-text">{{$t('Desc.text4')}}</div>
             <div class="list-text">{{$t('Desc.text5')}}</div>
             <div class="list-text">{{$t('Desc.text6')}}</div>
             <div class="list-text">{{$t('Desc.text7')}}</div>
             <div class="list-text">{{$t('Desc.text8')}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DescDetail',
  methods: {
    backChange () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
    .desc-container{
        display: flex;
        flex-direction: column;
        padding:0 16px;
        .desc-title{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding:10px 0;
            .title-img{
                width:13px;
                height:22px;
            }
            .desc-span{
                color:#444;
                font-size:17px;
                font-weight: bold;
                padding-left:40%;
            }
        }
        .desc-top{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top:25px;
            .top-title{
                font-size:20px;
                font-weight: bold;
                color:#444;
            }
            .top-text{
                color:#444;
                font-size:14px;
                margin-top:25px;
            }
        }
        .desc-body{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top:35px;
            .body-title{
                font-size:20px;
                font-weight: bold;
                color:#444;
            }
            .body-list{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                margin-top:25px;
                text-align: left;
                font-size:14px;
                color:#444;
                .list-text{
                    width:100%
                }
            }
        }
    }

</style>
