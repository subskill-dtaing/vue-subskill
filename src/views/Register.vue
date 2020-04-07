<template>
    <div class="register">
        <h3 class="register-logo">Subskill</h3>
        <div class="register-form">
            <h1 class="register-title">Sign up</h1>
            <form @submit.prevent="submitForm">
                <div class="custom-input">
                    <label>Name</label>
                    <input type="text" v-model="form.name" placeholder="Jean Claude" required>
                </div>
                <div class="custom-input">
                    <label>Email</label>
                    <input type="email" v-model="form.email" placeholder="Enter email adress" required>
                </div>
                <div class="custom-input">
                    <label>Password</label>
                    <input type="password" v-model="form.password" placeholder="Enter a password" required>
                </div>
                <input type="submit" value="Sign up" class="btn-blue">
            </form>
            <p class="register-redirection">Already have an account? <router-link to="/login">Log in</router-link></p>
        </div>
        <div class="register-visual">
            <img src="@/assets/logo.png" alt="" class="login-visual_img">
        </div>

    </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: 'Register',
    components: {
    },
    data: () => {
        return {
          form: {
            email: '',
            password: '',
            name: '',
          }
        }
    },
    methods: {
      submitForm() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            console.log(data, 'DATA');
            data.user.updateProfile({
              displayName: this.form.name
            }).then(() => this.$router.replace({ name: "Home" }))
          })
          .catch(err => {
            alert(err);
          })
      }
    }
  }
</script>


<style scoped lang="scss">
.register {
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
