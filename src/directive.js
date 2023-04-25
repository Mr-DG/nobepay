export const clickOutside = {
  beforeMount(el, binding) {
    // 点击元素外部触发的函数
    const handleClickOutside = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value()
      }
    };

    // 添加事件监听器，在点击文档中的任何地方时触发
    document.addEventListener("click", handleClickOutside)
    // 保存绑定的函数，以便在unbind钩子中移除事件监听器
    el.__vueClickOutside__ = handleClickOutside
  },

  unmounted(el) {
    // 移除事件监听器
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
}