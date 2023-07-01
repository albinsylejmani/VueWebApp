<template>
    <div class="login-container">
      <div class="login-form">
        <img alt="Logo" src="../assets/logo.png" class="logo">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label>Email</label>
            <div class="input-line">
              <input type="text" v-model="email" placeholder="Email" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="input-line">
              <input type="password" v-model="password" placeholder="Password" class="form-control">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
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
      };
    },
    methods: {
      login() {
        // Perform login logic here
        // You can access the entered email and password via this.email and this.password
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
    border: 1px solid #ccc;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    display: block;
    margin: 0 auto;
    width: 100px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
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
    border-bottom: 1px solid #ccc;
    padding: 5px;
    background-color: transparent;
    width: 100%;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  