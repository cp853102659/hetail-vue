const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  userName: state => state.user.userName,
  nickName: state => state.user.nickName,
  realName: state => state.user.realName,
  sex: state => state.user.sex,
  email: state => state.user.email,
  phone: state => state.user.phone,
  qq: state => state.user.qq,
  department: state => state.user.department,
  job: state => state.user.job,
  loginDate: state => state.user.loginDate,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
