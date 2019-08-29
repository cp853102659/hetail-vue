<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>我的信息</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="image" :height="'100px'" :width="'100px'" :hoverable="false">
          {{ user.roles }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.nickName }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="name" /><span>用户名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.userName }}</div>
        <div class="user-bio-section-header"><svg-icon icon-class="people" /><span>姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.realName }}</div>
        <div class="user-bio-section-header"><svg-icon icon-class="mail" /><span>邮箱：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.email }}</div>
        <div class="user-bio-section-header"><svg-icon icon-class="mobile" /><span>手机号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.phone }}</div>
        <div class="user-bio-section-header"><svg-icon icon-class="qq" /><span>QQ号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.qq }}</div>
        <div class="user-bio-section-header"><svg-icon icon-class="home" /><span>部门：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.department }}</div>
        <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>职位：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ user.job }}</div>
      </div>
    </div>
    <p>最近登录时间：{{ user.loginDate }}</p>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import userImage from '@/assets/user/user.jpg'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          userName: '',
          realName: '',
          nickName: '',
          sex: '',
          email: '',
          phone: '',
          qq: '',
          department: '',
          job: '',
          loginDate: '',
          roles: ''
        }
      }
    }
  },
  data() {
    return {
      image: userImage
    }
  }
}
</script>

<style lang="scss" scoped>
  .box-center {
    margin: 0 auto;
    display: table;
  }

  .text-muted {
    color: #777;
  }

  .user-profile {
    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
      font-size: 14px;
    }

    .box-social {
      padding-top: 30px;

      .el-table {
        border-top: 1px solid #dfe6ec;
      }
    }

    .user-follow {
      padding-top: 20px;
    }
  }

  .user-bio {
    margin-top: 20px;
    color: #606266;

    span {
      padding-left: 4px;
    }

    .user-bio-section {
      font-size: 14px;
      padding: 15px 0;

      .user-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
      }
    }
  }
</style>
