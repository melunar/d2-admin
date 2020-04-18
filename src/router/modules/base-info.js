import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/base-info',
  name: 'base-info',
  meta,
  redirect: { name: 'base-info-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: _import('base-info/index'),
      meta: {
        ...meta,
        title: '基本信息管理'
      }
    },
    {
      path: 'category',
      name: `${pre}category`,
      component: _import('base-info/category'),
      meta: {
        ...meta,
        title: '品类管理'
      }
    },
    {
      path: 'brand',
      name: `${pre}brand`,
      component: _import('base-info/brand'),
      meta: {
        ...meta,
        title: '品牌管理'
      }
    }
  ])('base-info-')
}
