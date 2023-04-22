<template>
  <div class="package">
    <div class="package-item" v-for="item in packageList" :key="item.key">
      <div class="title">{{ item.title }}</div>
      <div
        class="money"
        style="font-size: var(--title1);
        font-weight: bold;
        text-align: center;
        margin-bottom: 40px;">
        <template v-if="item.default">{{ item.default }}</template>
        <template v-if="item.money">
          <span style="color: var(--money)">$99</span>
          <span style="color: var(--gray-text); font-size: var(--content); font-weight: normal;">/1个月</span>
        </template>
      </div>
      <n-button
        type="primary"
        style="width: 100%; height: 40px; font-size: var(--content); margin-bottom: 40px;"
        @click="handleClick(item.key)">
        立即开通
      </n-button>
      <SectionBox :data="item.rate" title="卡段费率" :unit="true" />
      <SectionBox :data="item.feature" title="功能对比" :unit="false" />
    </div>
  </div>
  <BuyModal ref="BuyModalRef" :type="type" />
</template>

<script setup>
import SectionBox from './sectionBox.vue'
import BuyModal from './buyModal.vue'
const type = ref()
const BuyModalRef = ref()
const handleClick = (key) => {
  type.value = key
  BuyModalRef.value.proModalRef.openModal()
}
const packageList = [{
  key: 0,
  title: '个人用户',
  default: '新用户默认',
  rate: [
    { label: '404651', value: '$5' },
    { label: '543280', value: '$1' },
    { label: '464055', value: '$1' },
    { label: '428022', value: '$1' },
    { label: '524380', value: '$1' },
    { label: '476131', value: '$1' },
    { label: '493663', value: '$3' },
    { label: '509519', value: '$4' }
  ],
  feature: [
    { label: '可开卡位', value: '1000' },
    { label: '服务费率', value: '3%' },
    { label: 'KYC级别', value: '实名认证' }
  ]
}, {
  key: 1,
  title: '会员用户',
  money: '99',
  rate: [
    { label: '404651', value: '$4' },
    { label: '543280', value: '$1' },
    { label: '464055', value: '$0.5' },
    { label: '428022', value: '$1' },
    { label: '524380', value: '$1' },
    { label: '476131', value: '$1' },
    { label: '493663', value: '$2' },
    { label: '509519', value: '$3' }
  ],
  feature: [
    { label: '可开卡位', value: '2000' },
    { label: '服务费率', value: '2%' },
    { label: 'KYC级别', value: '实名认证' }
  ]
}, {
  key: 2,
  title: '专业用户',
  money: '新用户默认',
  rate: [
    { label: '404651', value: '$3' },
    { label: '543280', value: '$0.5' },
    { label: '464055', value: '$0.5' },
    { label: '428022', value: '$1' },
    { label: '524380', value: '$0.5' },
    { label: '476131', value: '$0.5' },
    { label: '493663', value: '$1' },
    { label: '509519', value: '$2' }
  ],
  feature: [
    { label: '可开卡位', value: '无限制' },
    { label: '服务费率', value: '1%' },
    { label: 'KYC级别', value: '实名认证' }
  ]
}]
</script>

<style scoped lang="less">
.package {
  display: flex;
  gap: 30px;

  .package-item {
    flex: 1;
    background-color: var(--gray-bg);
    padding: 20px;

    .title {
      text-align: center;
      color: var(--gray-text);
      font-size: var(--content);
      margin-bottom: 20px;
    }
  }
}
</style>
