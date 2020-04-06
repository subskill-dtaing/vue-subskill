<template>
    <div class="register">
        Register a new user
        <form @submit.prevent="submitForm">
            <label>
                <p>Name</p>
                <input type="text" v-model="form.name">
            </label>
            <label>
                <p>Email</p>
                <input type="email" v-model="form.email">
            </label>
            <label>
                <p>Password</p>
                <input type="password" v-model="form.password">
            </label>
            <input type="submit" value="Submit">
        </form>
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
