<template>
  <div class="login-container">
    <div class="login-form">
      <img alt="Logo" src="../assets/Logo-Stree.png" class="logo" style="display: block;
      margin: 0 auto;
      width: 150px;
      height: auto;
      margin-top: 80px;
      margin-bottom: 72px;">
      <form @submit.prevent="validateLogin">
        <div class="form-group">
          <div class="input-line">
            <input type="text" v-model="email" placeholder="Email ID" class="form-control">
          </div>
          <div v-if="!isValidEmail" class="error-message">Please enter a valid email address.</div>
        </div>
        <div class="form-group">
          <div class="input-line">
            <input type="password" v-model="password" placeholder="Password" class="form-control">
          </div>
          <div v-if="!isValidPassword" class="error-message">Please enter a password.</div>
          <div class="forgot-password">
            <a href="#" class="forgot-link">Forgot Password?</a>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-danger" :disabled="!isValidInput">Login</button>
          <div v-if="loginFailed" class="error-message">Invalid email or password.</div>
        </div>
        <div class="register-section">
          <span>Don't have an account?</span> <router-link to="/register" class="register-link">Register Now</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      loginFailed: false,
    };
  },
  computed: {
    isValidEmail() {
      if (this.email === '') {
        return true;
      }
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    isValidPassword() {
      if (this.password === '') {
        return true;
      }
      return this.password.trim() !== '';
    },
    isValidInput() {
      return this.isValidEmail && this.isValidPassword;
    },
  },
  methods: {
    validateLogin() {
      if (!this.isValidEmail || !this.isValidPassword) {
        return;
      }
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === this.email && user.password === this.password) {
          console.log('User logged in successfully');
          this.$router.push('/home');
        } else {
          this.loginFailed = true;
          console.log('Invalid email or password');
        }
      } else {
        this.loginFailed = true;
        console.log('No registered user found');
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 550px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
}

.logo {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
  margin-top: 80px;
  margin-bottom: 72px;
}

.form-group {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
}

.input-line {
  position: relative;
}

.input-line:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.form-control {
  border: none;
  outline: none;
  padding: 5px;
  background-color: transparent;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.btn-danger {
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-danger:disabled {
  background-color: #ccc !important;
  color: #888 !important;
  cursor: not-allowed;
  border-color: transparent !important;
}

.register-section {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
}

.register-link {
  color: red;
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  height: 16px;
}

.forgot-password {
  text-align: right;
  margin-top: 10px;
}

.forgot-link {
  color: red;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}

.forgot-link:hover {
  text-decoration: underline;
}

input[type="password"] {
  border: none;
  border-bottom: 1px solid #ced4da;
  outline: none;
  padding: 5px 0;
}

input[type="text"] {
  border: none;
  border-bottom: 1px solid #ced4da;
  outline: none;
  padding: 5px 0;
}
</style>
