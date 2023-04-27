<template>
  <div class="service-box">
    <div class="top">
      <img src="@assets/images/service_bg_top.jpg" alt="">
    </div>
    <div class="center">
      <div class="title">您好！欢迎来到Nobepay!请随意提问。</div>
      <div class="tips">Tips：我们的工作时间是9:00-12:00/13:00-18:00/19:00-21:00，建议您在工作时间充值和咨询！</div>
      <div class="chat-box">

      </div>
      <div class="action">
        <div class="left">
          <Link class="icon" />
          <Smile class="icon" />
        </div>
        <div class="right">
          <n-button type="primary" class="send-btn">发送</n-button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <img src="@assets/images/service_bg_bottom.jpg" alt="">
    </div>
  </div>
</template>

<script setup>
import Link from '@assets/images/icon/link.svg'
import Smile from '@assets/images/icon/smile.svg'
</script>

<style scoped lang="less">
.service-box {
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .top,
  .bottom {
    img {
      width: 100%;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    .title {
      margin-top: 100px;
      font-size: var(--title1);
      font-weight: bold;
    }

    .tips {
      margin-top: 20px;
      font-size: var(--content);
      color: var(--gray-text)
    }

    .chat-box {
      margin-top: 40px;
      width: 500px;
      height: 300px;
      background-color: #fafafa;
      border-radius: 4px;
      margin-bottom: 20px;
    }

    .action {
      display: flex;
      width: 500px;
      justify-content: space-between;

      .left {
        display: flex;
        gap: 20px;

        .icon {
          cursor: pointer;
        }
      }

      .right {
        .send-btn {
          width: 120px;
        }
      }
    }
  }
}
</style>
