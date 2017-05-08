function translateReset (el, binding, vnode) {
  const vm = vnode.context

  const text = vm.i18n && vm.$t ? vm.$t(binding.value) : binding.value
  el.innerHTML = text
}

export default {
  bind: translateReset,
  update: translateReset
}
