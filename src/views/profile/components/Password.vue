<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="原始密码">
        <el-input placeholder="请输入原始密码" v-model="originalPassword" clearable show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input placeholder="请输入新密码" v-model="newPassword" clearable show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input placeholder="请确认新密码" v-model="confirmPassword" clearable show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalPassword: '',
      newPassword: '',
      confirmPassword: ''
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

<style scoped>

</style>
