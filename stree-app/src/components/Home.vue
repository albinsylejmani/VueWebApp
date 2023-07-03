<template>
  <div class="home-container">
    <div class="home-form">
      <div class="words">
        <h2 class="home-title">You are now Home</h2>
        <p class="home-text">All you can do here is get out</p>
      </div>
      <button class="logout-button btn btn-danger" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeForm',
  methods: {
    logout() {
      this.$router.push('/Login');
    },
  },
};
</script>

<style>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
  text-align: center;
}

.words {
  margin-bottom: 60px;
}

.home-form {
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 610px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-title {
  margin-top: 0;
}

.home-text {
  color: #b0b0b0;
  margin-top: 20px;
  font-size: 16px;
}

.logout-button {
  width: 250px !important;
  margin-top: 40px;
  font-size: 16px;
  padding: 10px 15px;
}
</style>
