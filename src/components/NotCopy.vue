<template>
    <div class="not-container">
        <div class="not-body">
            <div class="not-card">
                <div class="card-text">
                   <span class="text-title">{{$t('Home.notTitle')}}</span>
                   <span>{{$t('Home.notText6')}}</span>
                </div>
                <div class="card-btn">
                    <span class="btn-span">{{$t('Home.notText7')}}</span>
                    <div class="btn-color"></div>
                    <span>{{$t('Home.notText8')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NotCopy',
  methods: {

  }
}
</script>

<style scoped lang="less">
    .not-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: auto;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        .not-body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .not-card{
                display: flex;
                flex-direction: column;
                height:115px;
                width:600px;
                border-radius: 10px;
                background:#fff;
                .card-text{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding:25px 30px;
                    color:#444444;
                    font-size:15px;
                    .text-title{
                        color:#444;
                        font-size:15px;
                        padding-bottom:15px;
                        font-weight: bold;
                    }
                }
                .card-btn{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    color:#4D51C6;
                    font-size:15px;
                    font-weight: bold;
                    padding:11px 0;
                    background-color: #F6F7FB;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    .btn-span{
                        color:#AFB0B9;
                    }
                    .btn-color{
                        width:2px;
                        height:20px;
                        background-color: #EAEAF1;
                    }
                }

            }
            .not-close{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top:15px;
                padding:20px 0;
                .close-img{
                    width:22px;
                    height:22px;
                }
            }
        }
    }
</style>
