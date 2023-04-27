<template>
  <div class="open-card-box main-box">
    <div class="area">
      <div class="title">选择区域</div>
      <MyRadio
        :data="areaOptions"
        v-model:value="formData.area"
        :style="{
            width: '100px',
            height: '30px',
            fontSize: '16px',
            backgroundColor: '#fafafa',
            border: '1px solid #EAECEF'
          }" />
    </div>
    <div class="paragraph">
      <div class="title"><span style="color: var(--primary)">*</span>选择卡段<span>(该卡段:EUR欧元卡/支持全球地区消费,卡片有效期1年)</span></div>
      <MyRadio
        :data="paragraphOptions"
        v-model:value="formData.paragraph"
        :style="{
            width: '140px',
            height: '30px',
            fontSize: '16px',
            backgroundColor: '#fafafa',
            border: '1px solid #707A8A'
          }" />
      <div class="tip"><span style="color: var(--primary)">*</span>推荐使用场景: Amazon/ Walmart/ Lazada/阿里国际站等</div>
      <n-button type="primary" style="padding: 20px 30px;">
        <Reflash />随机地址
      </n-button>
    </div>
    <div class="info-form">
      <ProForm :searchList="searchList" :search="false"></ProForm>
      <ProForm :searchList="searchList2" :search="false"></ProForm>
    </div>
    <div class="open">
      <div class="left">
        <div>开卡费: 15￥</div>
        <div>充值金额: 1000￥</div>
        <div>服务费: 5￥(5%)</div>
      </div>
      <div class="middle">
        合计: 1020￥
      </div>
      <div class="right">
        <n-button
          type="primary"
          size="large"
          class="open-btn"
          @click="handleOpenCard">开卡</n-button>
      </div>
    </div>
    <ProModal
      ref="authModalRef"
      title="实名认证"
      style="width: 440px">
      <AuthModal></AuthModal>
    </ProModal>
  </div>
</template>

<script setup>
import Reflash from '@assets/images/icon/reflash.svg'
import ProModal from '@components/ProModal/index.vue'
import AuthModal from './authModal.vue'
import { useSearch } from './useSearch'
import { useSearch2 } from './useSearch2'

const formData = ref({
  area: '0',
  paragraph: ''
})

const areaOptions = [
  { label: '中国大陆', value: 0 },
  { label: '美元区', value: 1 },
  { label: '港币区', value: 2 },
  { label: '欧元区', value: 3 },
  { label: '迪拉姆区', value: 4 },
  { label: '加币区', value: 5 },
  { label: '日元区', value: 6 },
  { label: '英镑区', value: 7 },
]

const paragraphOptions = [
  { label: '533277', value: '533271', type: 0, key: 0 },
  { label: '533277', value: '533272', type: 1, key: 1 },
  { label: '533277', value: '533273', type: 0, key: 2 },
  { label: '533277', value: '533274', type: 1, key: 3 },
  { label: '533277', value: '533275', type: 0, key: 4 },
  { label: '533277', value: '533276', type: 1, key: 5 },
  { label: '533277', value: '533277', type: 0, key: 6 },
  { label: '533277', value: '533278', type: 1, key: 7 },
]

const { searchList } = useSearch()
const { searchList2 } = useSearch2()

const authModalRef = ref()
const handleOpenCard = () => {
  authModalRef.value.openModal()
}
</script>

<style scoped lang="less">
.open-card-box {
  padding: 40px 0;
  --margin-bottom: 20px;
  background: url('@assets/images/open_card_bg.jpg');
  background-size: 500px auto;
  background-repeat: no-repeat;
  background-position: top right;

  .area {
    width: 40%;
    margin-bottom: 40px;

    .title {
      font-size: var(--title2);
      font-weight: bold;
      margin-bottom: var(--margin-bottom);
    }
  }

  .paragraph {
    width: 60%;
    margin-bottom: 40px;

    .title {
      font-size: var(--title2);
      // font-weight: bold;
      margin-bottom: var(--margin-bottom);

      span {
        font-weight: normal;
        color: var(--gray-text);
        font-size: var(--content);
      }
    }

    .tip {
      margin-top: var(--margin-bottom);
      color: var(--gray-text);
      margin-bottom: var(--margin-bottom);
    }
  }

  .open {
    box-sizing: border-box;
    display: flex;
    padding: 20px;
    width: 580px;
    height: 108px;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #eaecef;

    .left {
      color: var(--gray-text);
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }

    .middle {
      padding: 20px;
      border-left: 1px solid var(--gray-text);
    }

    .right {
      .open-btn {
        font-size: var(--content);
        width: 160px;
        padding: 24px 0;
      }
    }
  }
}
</style>
