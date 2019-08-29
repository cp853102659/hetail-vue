import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  userName: '',
  nickName: '',
  realName: '',
  sex: '',
  email: '',
  phone: '',
  qq: '',
  department: '',
  job: '',
  loginDate: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME: (state, userName) => {
    state.userName = userName
  },
  SET_NICKNAME: (state, nickName) => {
    state.nickName = nickName
  },
  SET_REALNAME: (state, realName) => {
    state.realName = realName
  },
  SET_SEX: (state, sex) => {
    state.sex = sex
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_PHONE: (state, phone) => {
    state.phone = phone
  },
  SET_QQ: (state, qq) => {
    state.qq = qq
  },
  SET_DEPARTMENT: (state, department) => {
    state.department = department
  },
  SET_JOB: (state, job) => {
    state.job = job
  },
  SET_LOGINDATE: (state, loginDate) => {
    state.loginDate = loginDate
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { userName, nickName, realName, sex, email, phone, qq, department, job, loginDate, roles } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_USERNAME', userName)
        commit('SET_NICKNAME', nickName)
        commit('SET_REALNAME', realName)
        commit('SET_SEX', sex)
        commit('SET_EMAIL', email)
        commit('SET_PHONE', phone)
        commit('SET_QQ', qq)
        commit('SET_DEPARTMENT', department)
        commit('SET_JOB', job)
        commit('SET_LOGINDATE', loginDate)
        commit('SET_ROLES', roles)
        console.log(data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
