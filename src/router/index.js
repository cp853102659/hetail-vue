import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  /** when your routing map is too long, you can split it into small modules **/
  {
    path: '/personal',
    component: Layout,
    redirect: 'noRedirect',
    name: 'personalResource',
    meta: {
      title: '个人信息',
      icon: 'personal'
    },
    children: [
      {
        path: 'base',
        component: () => import('@/views/permission/page'),
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
  },
  {
    path: '/human',
    component: Layout,
    redirect: 'noRedirect',
    name: 'humanResource',
    meta: {
      title: '人力管理',
      icon: 'user',
      roles: ["admin"]
    },
    children: [
      {
        path: 'performance',
        component: () => import('@/views/charts/mix-chart'),
        name: 'performance',
        meta: {
          title: '绩效管理',
          roles: ["admin"]
        }
      },
      {
        path: 'attendance',
        component: () => import('@/views/charts/mix-chart'),
        name: 'attendance',
        meta: {
          title: '考勤管理',
          roles: ["admin"]
        }
      }
    ]
  },
  {
    path: '/organization',
    component: Layout,
    redirect: 'noRedirect',
    name: 'organizationResource',
    meta: {
      title: '机构管理',
      icon: 'organization'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/charts/keyboard'),
        name: 'user',
        meta: { title: '用户管理', noCache: true }
      },
      {
        path: 'department',
        component: () => import('@/views/charts/keyboard'),
        name: 'department',
        meta: { title: '部门管理', noCache: true }
      }
    ]
  },
  {
    path: '/office',
    component: Layout,
    redirect: 'noRedirect',
    name: 'officeResource',
    meta: {
      title: '行政管理',
      icon: 'office'
    },
    children: [
      {
        path: 'notice',
        component: () => import('@/views/charts/keyboard'),
        name: 'notice',
        meta: { title: '公告管理', noCache: true }
      },
      {
        path: 'news',
        component: () => import('@/views/charts/keyboard'),
        name: 'news',
        meta: { title: '新闻管理', noCache: true }
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    redirect: 'noRedirect',
    name: 'projectResource',
    meta: {
      title: '项目管理',
      icon: 'project'
    },
    children: [
      {
        path: 'program',
        component: () => import('@/views/charts/keyboard'),
        name: 'program',
        meta: { title: '项目列表', noCache: true }
      },
      {
        path: 'model',
        component: () => import('@/views/charts/keyboard'),
        name: 'model',
        meta: { title: '项目模板', noCache: true }
      },
      {
        path: 'detail',
        component: () => import('@/views/charts/keyboard'),
        name: 'detail',
        meta: { title: '新闻管理', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/analysis',
    component: Layout,
    redirect: 'noRedirect',
    name: 'analysisResource',
    meta: {
      title: '数据统计',
      icon: 'analysis'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/charts/keyboard'),
        name: 'user',
        meta: { title: '员工数据', noCache: true }
      },
      {
        path: 'statistics',
        component: () => import('@/views/charts/keyboard'),
        name: 'statistics',
        meta: { title: '数据统计', noCache: true }
      },
      {
        path: 'echart',
        component: () => import('@/views/charts/keyboard'),
        name: 'echart',
        meta: { title: '图表分析', noCache: true }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: 'noRedirect',
    name: 'systemResource',
    meta: {
      title: '系统管理',
      icon: 'config'
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
      },
      {
        path: 'permission',
        component: () => import('@/views/charts/keyboard'),
        name: 'permission',
        meta: { title: '权限管理', noCache: true }
      },
      {
        path: 'log',
        component: () => import('@/views/charts/keyboard'),
        name: 'log',
        meta: { title: '日志管理', noCache: true }
      },
      {
        path: 'monitor',
        component: () => import('@/views/charts/keyboard'),
        name: 'monitor',
        meta: { title: '系统安全', noCache: true }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
