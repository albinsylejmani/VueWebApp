<template>
  <div class="login-container">
    <div class="login-form">
      <img alt="Logo" src="../assets/Logo-Stree.png" class="logo" style="  display: block;
      margin: 0 auto;
      width: 150px;
      height: auto;
      margin-top: 50px;
      margin-bottom: 72px;">
      <form @submit.prevent="login">
        <div class="form-group">
          <div class="input-line">
            <input type="text" v-model="email" placeholder="Email ID" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-line">
            <input type="password" v-model="password" placeholder="Password" class="form-control">
          </div>
          <div class="forgot-password">
            <a href="#" class="forgot-link">Forgot Password?</a>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-danger" :class="{ 'disabled': !isValidInput }" :disabled="!isValidInput">Login</button>
        </div>
        <a style="font-weight: 50; margin-left:20px; font-size: 14px; background-color:transparent">Don't have an account?</a> <a href="#" class="forgot-link">Register Now</a>
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
  computed: {
    isValidInput() {
      return this.email.trim() !== '' && this.password.trim() !== '';
    },
  },
  methods: {
    login() {
  // Perform login logic here

  // Retrieve stored user data from local storage
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (user.email === this.email && user.password === this.password) {
      // User is verified, perform the necessary actions
      console.log('User logged in successfully');
    } else {
      console.log('Invalid email or password');
    }
  } else {
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

.login-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 550px;
  margin-bottom: 30px; /* Add margin-bottom to create space above the button */
}


.form-group {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
}

.label {
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
  outline: none;
  padding: 5px;
  background-color: transparent;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.btn-danger {
  width: 100%; /* Set the width to 100% for a wider button */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-danger.disabled {
  background-color: #ccc !important;
  color: #888 !important;
  cursor: not-allowed;
  border-color: transparent !important;
}

input[type="password"] {
  border: none; /* Remove the border */
  border-bottom: 1px solid #ced4da; /* Add a bottom border for the underline effect */
  outline: none; /* Remove the outline */
  padding: 5px 0; /* Adjust the padding as needed */
}

input[type="text"] {
  border: none; /* Remove the border */
  border-bottom: 1px solid #ced4da; /* Add a bottom border for the underline effect */
  outline: none; /* Remove the outline */
  padding: 5px 0; /* Adjust the padding as needed */
}
</style>
