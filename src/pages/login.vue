<template>
  <div id="login">
    <div class="login-bg">DevManage</div>
    <div class="login-main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="register('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            console.log(valid)
          if (valid) {
            const userName = this.ruleForm.name
            this.$router.push({ name: 'home', path: '/home', params: { userName: userName }})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      register(formName) {
        //
      }
    },
    mounted() {
      console.log(this.$store.state.route)
    },
    computed: {
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  > .login-bg {
    width: 50%;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: #409eff;
    line-height: 100vh;
  }
  > .login-main {
    width: 30%;
    padding: 20% 20% 0 0;
  }
}
</style>
