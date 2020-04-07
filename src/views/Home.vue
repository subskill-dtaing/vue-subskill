<template>
  <div class="home">
    <ChatList
        :all-messages="allMessages"
        :current-user="currentUser"
    />
    <textarea
        name="message"
        v-model="message"
        class="home-textarea"
        @keydown.enter.prevent="sendMessage"
        placeholder="Message General"
    />
    <button @click="logOutUser" class="signout">
      <img src="@/assets/log-out.svg" alt="">
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'
import ChatList from "../components/ChatList";

export default {
  name: 'Home',
  components: { ChatList },
  data() {
   return {
     message: '',
     allMessages: [],
     currentUser: null
   }
  },
  mounted() {
    this.currentUser = firebase.auth().currentUser;
    const dbRef = firebase.database().ref('messages');

    dbRef.on('value', snapshot => {
      let data = snapshot.val();
      let messages = [];

      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text
        });
      });

      this.allMessages = [...messages];
      console.log(this.allMessages);
    });
  },
  methods: {
    sendMessage() {
      const messageUser = {
        username: this.currentUser.displayName || this.currentUser.email,
        text: this.message
      };

      firebase.database().ref('messages').push(messageUser);

      this.message = '';
    },
    logOutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login"
          });
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    background: $grey;
    &-textarea {
      width: calc(100% - 4rem);
      height: 70px;
      padding: 1rem 0 0 1rem;
      margin: 0 2rem;
      display: block;
      font-size: 16px;
      outline: none;
      color: $white;
      border: none;
      background: rgba($black, .5);
      border-radius: 4px;
      &::placeholder {
        color: $white;
      }
    }
  }
  .signout {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
    }
  }
</style>
