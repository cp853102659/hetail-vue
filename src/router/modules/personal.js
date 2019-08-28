/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const personalRouter = {
  path: '/personal',
  component: Layout,
  redirect: 'noRedirect',
  name: 'personalResource',
  meta: {
    title: '个人信息',
    icon: 'people'
  },
  children: [
    {
      path: 'base',
      component: () => import('@/views/charts/keyboard'),
      name: 'employee',
      meta: { title: '基本信息' }
    },
    {
      path: 'performance',
      component: () => import('@/views/charts/mix-chart'),
      name: 'performance',
      meta: { title: '工作绩效' }
    }
  ]
}

export default personalRouter
