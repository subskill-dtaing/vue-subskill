<template>
    <section class="login">
        <h3 class="login-logo">Subskill</h3>
        <div class="login-form">
            <h1 class="login-title">Log in</h1>
            <form @submit="submitForm">
                <div class="custom-input">
                    <label>Email</label>
                    <input type="email" v-model="form.email" placeholder="you@example.com" required>
                </div>
                <div class="custom-input">
                    <label>Password</label>
                    <input type="password" v-model="form.password" placeholder="Enter your password" required>
                </div>
                <input type="submit" value="Log in" class="btn-blue">
            </form>
            <p class="login-redirection">Don't have an account? <router-link to="/register">Sign up</router-link></p>
        </div>
        <div class="login-visual">
            <img src="@/assets/logo.png" alt="" class="login-visual_img">
        </div>
    </section>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
            console.log(data, 'DATA');
            this.$router.replace({ name: "Home" })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
    display: flex;
    align-content: center;
    justify-content: space-between;
    height: 100vh;
    &-form {
        width: calc(50% - 16rem);
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 8rem;
    }
    &-logo {
        margin: 0;
        position: absolute;
        left: 32px;
        top: 32px;
        color: $lightBlue;
    }
    &-title {
        margin: 0 0 1.5rem;
        color: $black;
        text-align: left;
        font-size: 40px;
    }
    &-visual {
        width: 50%;
        background-color: $lightBlue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-redirection {
        text-align: left;
        margin-top: 5rem;
        font-weight: bold;
        font-size: 14px;
        a {
            color: $blue;
        }
    }
}
</style>
