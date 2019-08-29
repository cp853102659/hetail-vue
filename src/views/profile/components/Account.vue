<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-input placeholder="请输入昵称" v-model.trim="user.nickName" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input placeholder="请输入邮箱" v-model.trim="user.email" clearable></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号" v-model.trim="user.phone" clearable></el-input>
      </el-form-item>
      <el-form-item label="QQ号">
        <el-input placeholder="请输入QQ号" v-model.trim="user.qq" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          nickName: '',
          email: '',
          phone: '',
          qq: ''
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
