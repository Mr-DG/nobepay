<template>
  <div class="box">
    <div class="recharge-box">
      <div class="banner">
        <img src="@assets/images/recharge_banner.jpg" alt="">
      </div>
      <div class="currency">
        <div class="title">数字货币充值</div>
        <div class="list">
          <div class="item" v-for="item in 3">
            <div class="icon">
              <ETH />
            </div>
            <div>ETH</div>
          </div>
        </div>
      </div>
      <div class="currency">
        <div class="title">
          法币充值
          <span style="
          color: #F8484D; 
          font-size: var(--content);">
            (法币渠道充值请先完成身份认证)
          </span>
        </div>
        <div class="list">
          <div class="item" v-for="item in 7">
            <div class="icon">
              <ETH />
            </div>
            <div>ETH</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="moon-img">
    <!-- <img src="@assets/images/light-card-moon.jpg" alt=""> -->
  </div>
</template>
<script setup>
import ETH from '@assets/images/icon/ETH.svg'
</script>
<style lang="less" scoped>
.box {
  background-color: #fff;
  background-image: url('@assets/images/light-card-moon.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
}

.recharge-box {
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
  padding: 40px 0 0;

  .banner {
    margin-bottom: 40px;

    img {
      width: 100%;
    }
  }

  .currency {
    width: 100%;
    margin-bottom: 40px;

    .title {
      margin-bottom: 20px;
      font-size: var(--title2);
    }

    .list {
      width: 100%;
      display: flex;
      gap: 50px;
      flex-wrap: wrap;
      box-sizing: border-box;

      .item {
        box-sizing: border-box;
        display: flex;
        width: 300px;
        justify-content: center;
        gap: 20px;
        align-items: center;
        background-color: var(--gray-bg);
        border-radius: 4px;
        padding: 20px 0;
        cursor: pointer;
      }
    }
  }
}

.moon-img {
  position: fixed;
  right: 0;
  bottom: 0;
  background-image: url('@assets/images/light-card-moon.jpg');
}
</style>