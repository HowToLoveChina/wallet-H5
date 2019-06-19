<template>
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
            <div class='key-cell-null' data-num='D'>
                <img src="../assets/icon-delete.png" class="null-img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NumberKeypad',
  methods: {
    // 处理按键
    _handleKeyPress (e) {
      let num = e.target.dataset.num
      // 不同按键处理逻辑
      // -1 代表无效按键，直接返回
      if (num === -1) return false
      switch (String(num)) {
        // 删除键
        case 'D':
          this._handleDeleteKey()
          break
        default:
          this._handleNumberKey(num)
          break
      }
    },
    // 处理删除键
    _handleDeleteKey () {
      let S = this.money
      // 如果没有输入，直接返回
      if (!S.length) return false
      //否则删除最后一个
      this.money = S.substring(0, S.length - 1);

    }
  }
}
</script>

<style scoped lang="less">
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
</style>
