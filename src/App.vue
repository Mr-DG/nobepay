<template>
  <n-config-provider
    class="config"
    :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <n-notification-provider>
            <TopNav />
            <router-view></router-view>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup>
import TopNav from '@/components/TopNav/index.vue'
const themeOverrides = reactive({
  "common": {
    "primaryColor": "#fcd535FF",
    "primaryColorHover": "#fcd535FF",
    "primaryColorPressed": "#FFD31EFF",
    "primaryColorSuppl": "#fcd535FF"
  },
  'Button': {
    'textColorPrimary': '#1E2329',
    'textColorTextPrimary': '#3D423FFF',
    'textColorHoverPrimary': '#3D423FFF',
    'textColorPressedPrimary': '#3D423FFF',
    'textColorFocusPrimary': '#3D423FFF',
    'colorPrimary': '#fcd535FF',
    'colorHoverPrimary': '#FCD535C4',
    'colorFocusPrimary': '#FCD535FF',
    'colorPressedPrimary': '#FCD535FF',
    'colorDisabledPrimary': '#FCD5354D',
    'borderPrimary': '#FCD535FF',
    'borderHoverPrimary': '#FCD535FF',
    'borderPressedPrimary': '#FCD535FF',
    'borderFocusPrimary': '#FCD535FF',
    'borderDisabledPrimary': '#FCD535FF',
    'rippleColorPrimary': '#FCD535FF'
  },
  "Input": {
    "borderHover": "1px solid #fcd535",
    "borderFocus": "1px solid #fcd535",
    "boxShadowFocus": "0"
  }
})
</script>

<style lang="less">
html,
body,
#app,
.config {
  height: 100%;
}

.main-box {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
