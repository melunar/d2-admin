import util from '@/libs/util.js'

export default {
  methods: {
    handleMenuSelect (index, indexPath) {
      if (/^d2-menu-empty-\d+$/.test(index) || index === undefined) {
        this.$message.warning('临时菜单')
      } else if (/^https:\/\/|http:\/\//.test(index)) {
        // 如果是http链接，新窗口打开之
        util.open(index)
      } else {
        this.$router.push({
          path: index
        })
      }
    }
  }
}
