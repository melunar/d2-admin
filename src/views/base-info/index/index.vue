<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <div>这里是内容</div>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-business'
export default {
  data () {
    return {
      menu,
      banner: {
        title: '引导',
        subTitle: '基本信息管理'
      }
    }
  }
}
</script>
