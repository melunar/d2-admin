// const pre = '/base-info/'
const bizList = (pre) => [{
  path: `${pre}category`,
  title: '品类页签',
  icon: 'table'
}, {
  path: `${pre}brand`,
  title: '品牌页签',
  icon: 'github'
}]
const asideMenu = () => ({
  path: '/base-info/index',
  title: '基本信息管理首页', // aside header
  icon: 'flask',
  children: [
    ...bizList('/base-info/')
  ]
})
export default (type) => {
  return {
    path: '/base-info',
    title: '基本信息管理', // header
    icon: 'flask',
    children: (pre => [
      ...(type === 'header' ? bizList(pre) : [asideMenu()])
    ])('/base-info/')
  }
}
