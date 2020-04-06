<template>
    <div class="login">
        <form @submit="submitForm">
            <label>
                <input type="email" v-model="form.email">
            </label>
            <label>
                <input type="password" v-model="form.password">
            </label>
            <input type="submit" value="Submit">
        </form>
    </div>
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
        })
    }
  }
}
</script>
