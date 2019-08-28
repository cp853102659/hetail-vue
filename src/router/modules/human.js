/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const humanRouter = {
  path: '/human',
  component: Layout,
  redirect: 'noRedirect',
  name: 'humanResource',
  meta: {
    title: '人力资源管理',
    icon: 'user'
  },
  children: [
    {
      path: 'employee',
      component: () => import('@/views/charts/keyboard'),
      name: 'employee',
      meta: { title: '员工管理' }
    },
    {
      path: 'performance',
      component: () => import('@/views/charts/mix-chart'),
      name: 'performance',
      meta: { title: '绩效管理' }
    },
    {
      path: 'attendance',
      component: () => import('@/views/charts/mix-chart'),
      name: 'attendance',
      meta: { title: '考勤管理' }
    }
  ]
}

export default humanRouter
