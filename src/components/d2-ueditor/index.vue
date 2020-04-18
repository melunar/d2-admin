<template>
  <d2-container>
    <span>ueditor 暂时被禁用，如需启用，请访问<a href="https://github.com/HaoChuan9421/vue-ueditor-wrap#readme">VueUeditorWrap</a>下载资源到public目录下，参考相关文件和log使用即可</span>
  </d2-container>
  <!-- <vue-ueditor-wrap
    ref="ueditor"
    v-model="currentValue"
    :config="config"
    :destroy="true"
    :init="init"/> -->
</template>

<script>
// 参考 https://github.com/HaoChuan9421/vue-ueditor-wrap
import Vue from 'vue'
import VueUeditorWrap from 'vue-ueditor-wrap'
import config from './ueditor.config'
// import buttonD2admin from './button/d2admin'
Vue.component('VueUeditorWrap', VueUeditorWrap)
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      config,
      currentValue: ''
    }
  },
  watch: {
    // 对外提供 v-model
    value: {
      handler (val) {
        if (this.currentValue !== val) {
          this.currentValue = val
        }
      },
      immediate: true
    },
    // 对外提供 v-model
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    init () {
      // 注册一个测试按钮
      // this.$refs.ueditor.registerButton(buttonD2admin)
    }
  }
}
</script>
