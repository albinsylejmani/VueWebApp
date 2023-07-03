<template>
  <div class="register-container">
    <div class="register-form">
      <router-link to="/login">
      <img alt="Logo" src="../assets/arrow2.png" class="logo"></router-link>
      <h2>Register to Stree</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <div class="input-line">
            <input type="text" v-model="fullName" placeholder="Full Name" class="form-control">
            <div v-if="fullNameError" class="error-message">{{ fullNameError }}</div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-line">
            <input type="email" v-model="email" placeholder="Email" class="form-control">
            <div v-if="emailError" class="error-message">{{ emailError }}</div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-line">
            <input type="tel" v-model="mobileNumber" placeholder="Mobile Number" class="form-control" pattern="\d*"
              inputmode="numeric">
            <div v-if="mobileNumberError" class="error-message">{{ mobileNumberError }}</div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-line">
            <input type="password" v-model="password" placeholder="Password" class="form-control">
          </div>
          <div class="password-strength">
            <div v-for="index in 4" :key="index"
              :class="{ active: index <= passwordStrength || (index === 1 && password.length >= 9) }"></div>
          </div>
          <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
        </div>
        <div class="form-group">
          <div class="input-line">
            <input style="margin-bottom: -20px;" type="password" v-model="confirmPassword" placeholder="Confirm Password"
              class="form-control">
            <div v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</div>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-danger" :class="{ 'disabled': !isValidInput }"
            :disabled="!isValidInput">Register</button>
        </div>
        <div class="terms-privacy">
          <a style="font-size: 11px; margin-right:3px">
            By registering you agree to</a>
          <span href="#" class="forgot-link" style="color: red; font-size: 11px;">Terms &amp; Conditions</span>
          <br><a style="margin-left: 40px; font-size: 11px;">and</a>
          <span href="#" class="forgot-link" style="color: red; font-size: 11px; margin-left:4px;">Privacy Policy</span>
          <a style="margin-left: 4px; font-size: 11px;">of Stree</a>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import zxcvbn from 'zxcvbn';

export default {
  name: 'RegisterForm',
  data() {
    return {
      fullName: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      fullNameError: '',
      emailError: '',
      mobileNumberError: '',
      confirmPasswordError: '',
      passwordStrength: 0,
      passwordError: '',
    };
  },
  computed: {
    isValidInput() {
      return (
        this.fullName.trim() !== '' &&
        this.email.trim() !== '' &&
        this.mobileNumber.trim() !== '' &&
        this.password.trim() !== '' &&
        this.confirmPassword.trim() !== '' &&
        this.password === this.confirmPassword &&
        !this.fullNameError &&
        !this.emailError &&
        !this.mobileNumberError &&
        !this.confirmPasswordError &&
        !this.passwordError
      );
    },
  },
  methods: {
    register() {
      const user = {
        fullName: this.fullName,
        email: this.email,
        mobileNumber: this.mobileNumber,
        password: this.password,
      };
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user)
      this.$router.push('/home');

    },
    validateFullName() {
      if (this.fullName.trim() === '') {
        this.fullNameError = 'Full Name is required.';
      } else if (/\d/.test(this.fullName)) {
        this.fullNameError = 'Full Name should not contain numbers.';
      } else {
        this.fullNameError = '';
      }
    },
    validateEmail() {
      if (this.email.trim() === '') {
        this.emailError = 'Email is required.';
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = 'Invalid email format.';
      } else {
        this.emailError = '';
      }
    },
    validateMobileNumber() {
  const inputValue = this.mobileNumber.trim();
  if (inputValue === '') {
    this.mobileNumberError = 'Mobile Number is required.';
  } else if (!/^\d{9,}$/.test(inputValue) || /[a-zA-Z]/.test(inputValue)) {
    this.mobileNumberError = 'Invalid mobile number format.';
  } else {
    this.mobileNumberError = '';
  }
},
    validatePassword() {
      if (this.password.trim() === '') {
        this.passwordError = 'Password is required.';
      } else if (this.password.length < 9) {
        this.passwordError = 'Password must be at least 9 characters long.';
      } else {
        this.passwordError = '';
      }


      const result = zxcvbn(this.password);
      this.passwordStrength = this.password.length >= 9 ? 4 : result.score;
    },
    validateConfirmPassword() {
      if (this.confirmPassword.trim() === '') {
        this.confirmPasswordError = 'Confirm Password is required.';
      } else if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = 'Passwords do not match.';
      } else {
        this.confirmPasswordError = '';
      }
    },
    isValidEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
    isValidMobileNumber(mobileNumber) {
      const mobileNumberRegex = /^\+?\d{9,}$/;
      return mobileNumberRegex.test(mobileNumber);
    },
  },
  watch: {
    fullName() {
      this.validateFullName();
    },
    email() {
      this.validateEmail();
    },
    mobileNumber() {
      this.validateMobileNumber();
    },
    password() {
      this.validatePassword();
    },
    confirmPassword() {
      this.validateConfirmPassword();
    },
  },
};
</script>
  
<style>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 610px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
}

.logo {
  display: block;
  margin: 0 auto;
  width: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: -8px;
}

.form-group {
  margin-bottom: 33px;
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
  width: 100%;
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

.error-message {
  color: red;
  font-size: 12px;
  height: 16px;
  overflow: hidden;
}

input[type="password"],
input[type="text"],
input[type="email"] {
  border: none;
  border-bottom: 1px solid #ced4da;
  outline: none;
  padding: 5px 0;
}

.password-strength {
  margin-top: 10px;
  display: flex;
}

.password-strength div {
  width: 25%;
  height: 5px;
  background-color: #ccc;
  margin-right: 5px;
}

.password-strength div.active {
  background-color: green;
}

.password-strength div.weak {
  background-color: red;
}

.password-strength div.fair {
  background-color: yellow;
}

.password-strength div.strong {
  background-color: lime;
}

.terms-privacy {
  margin-top: -30px;
  margin-left: 14px;
  font-size: 11px;
}</style>
  