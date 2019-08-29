<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="行为轨迹" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="密码修改" name="password">
                <password />
              </el-tab-pane>
              <el-tab-pane label="信息修改" name="account">
                <account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Password from './components/Password'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
  name: 'Profile',
  components: { UserCard, Timeline, Account, Password },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'userName',
      'realName',
      'nickName',
      'sex',
      'email',
      'phone',
      'qq',
      'department',
      'job',
      'loginDate',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        userName: this.userName,
        realName: this.realName,
        nickName: this.nickName,
        sex: this.sex,
        email: this.email,
        phone: this.phone,
        qq: this.qq,
        department: this.department,
        job: this.job,
        loginDate: this.loginDate,
        roles: this.roles.join('|')
      }
    }
  }
}
</script>
