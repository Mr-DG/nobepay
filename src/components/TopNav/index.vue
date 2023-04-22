<template>
  <nav>
    <div class="nav-left">
      <div class="logo" @click="router.push('/')">
        <Logo />
        <div class="logo-text">BNpay</div>
      </div>
      <div class="nav-item" @click="router.push('/')">首页</div>
      <div class="nav-item">快速充值</div>
      <div class="nav-item">
        <n-dropdown trigger="click" :options="cardOptions" @select="handleSelectCard">
          <div class="dropdown">
            卡片管理
            <Down />
          </div>
        </n-dropdown>
      </div>
      <div class="nav-item" @click="router.push('/member')">会员中心</div>
      <div class="nav-item">
        <n-dropdown trigger="click" :options="selfOptions" @select="handleSelectSelf">
          <div class="dropdown">
            个人中心
            <Down />
          </div>
        </n-dropdown>
      </div>
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

<script setup>
import Logo from '@assets/images/icon/logo.svg'
import Feature1 from '@assets/images/icon/feature1.svg'
import Feature2 from '@assets/images/icon/feature2.svg'
import Feature3 from '@assets/images/icon/feature3.svg'
import Down from '@assets/images/icon/down.svg'

const router = useRouter()

const cardOptions = [{ label: '开卡', key: '0' }, { label: '卡片列表', key: '1' }]
const selfOptions = [{ label: '我的账号', key: '0' }, { label: '交易记录', key: '1' }]

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

      .dropdown {
        gap: 5px;
        display: flex;
        align-items: center;
      }
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
