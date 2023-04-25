<template>
  <nav>
    <div class="nav-left">
      <div class="logo" @click="router.push('/')">
        <Logo />
        <div class="logo-text">BNpay</div>
      </div>
      <div class="nav-item" @click="router.push('/')">首页</div>
      <div class="nav-item">快速充值</div>
      <n-dropdown
        trigger="hover"
        :options="cardOptions"
        @select="handleSelectCard">
        <div class="dropdown nav-item">
          卡片管理
          <Down />
        </div>
      </n-dropdown>
      <div class="nav-item" @click="router.push('/member')">会员中心</div>
      <n-dropdown
        trigger="hover"
        :options="selfOptions"
        @select="handleSelectSelf">
        <div class="dropdown nav-item">
          个人中心
          <Down />
        </div>
      </n-dropdown>
      <div class="nav-item">在线客服</div>
    </div>
    <div class="nav-right">
      <div class="feture-item">
        <Feature1 />
      </div>
      <div class="feture-item">
        <Feature2 />
      </div>
      <div class="feture-item">
        <Feature3 />
      </div>
    </div>
  </nav>
</template>

<script setup lang="jsx">
import Logo from '@assets/images/icon/logo.svg'
import Feature1 from '@assets/images/icon/feature1.svg'
import Feature2 from '@assets/images/icon/feature2.svg'
import Feature3 from '@assets/images/icon/feature3.svg'
import Down from '@assets/images/icon/down.svg'
import OptionsItem from './optionsItem.vue'
import OpenCard from '@assets/images/icon/opencard.svg'
import CardList from '@assets/images/icon/cardlist.svg'
import Account from '@assets/images/icon/account.svg'
import Record from '@assets/images/icon/record.svg'

const router = useRouter()

const cardOptions = [
  {
    type: 'render',
    key: '0',
    render() {
      return (
        <OptionsItem label='创建卡片' onClick={() => handleSelectCard('0')}>
          <OpenCard />
        </OptionsItem>
      )
    }
  },
  {
    type: 'render',
    key: '1',
    render() {
      return (
        <OptionsItem label='卡片管理' onClick={() => handleSelectCard('1')}>
          <CardList />
        </OptionsItem>
      )
    }
  }
]
const selfOptions = [
  {
    key: '0',
    type: 'render',
    render() {
      return (
        <OptionsItem label='我的账号' onClick={() => handleSelectSelf('0')}>
          <Account />
        </OptionsItem>
      )
    }
  },
  {
    type: 'render',
    key: '1',
    render() {
      return (
        <OptionsItem label='交易记录' onClick={() => handleSelectSelf('1')}>
          <Record />
        </OptionsItem>
      )
    }
  }
]

const handleSelectCard = (key) => {
  const map = { '0': '/openCard', '1': '/cardList' }
  router.push(map[key])
}
const handleSelectSelf = (key) => {
  const map = { '0': '/account', '1': '/records' }
  router.push(map[key])
}
</script>

<style scoped lang="less">
nav {
  display: flex;
  justify-content: space-between;
  height: 64px;
  padding: 0 32px;

  .nav-left {
    display: flex;
    gap: 32px;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      cursor: pointer;
    }

    .nav-item {
      cursor: pointer;

    }

    .dropdown {
      gap: 5px;
      display: flex;
      align-items: center;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 32px;

    .feture-item {
      cursor: pointer;
    }
  }
}
</style>
