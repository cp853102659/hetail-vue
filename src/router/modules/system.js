/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: 'systemResource',
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'menu',
      component: () => import('@/views/charts/keyboard'),
      name: 'menu',
      meta: { title: '菜单管理', noCache: true }
    },
    {
      path: 'role',
      component: () => import('@/views/charts/keyboard'),
      name: 'role',
      meta: { title: '角色管理', noCache: true }
    }
  ]
}

export default systemRouter
