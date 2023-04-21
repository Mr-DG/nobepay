<template>
  <n-config-provider
    class="config"
    :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <n-notification-provider>
            <router-view></router-view>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup>
const themeOverrides = reactive({})
</script>

<style lang="less">
html,
body,
#app,
.config {
  height: 100%;
}
</style>
