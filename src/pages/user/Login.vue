<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-box"
      size="medium"
    >
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">注册</el-button>
        <el-button type="primary" @click="onSubmit()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      loading: false,
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async onSubmit() {
      console.log("登录");
      this.loading = false;
      const { data } = await api.user.login(this.form);

      this.loading = true;
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 400px;
  margin: 280px auto;
  padding: 80px;
  border: #dcdfe6 1px solid;
  border-radius: 20px;
}
</style>