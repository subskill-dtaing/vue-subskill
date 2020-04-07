<template>
  <ul class="chat-list" v-chat-scroll="{smooth: true, notSmoothOnInit: true}">
    <li v-for="(message, i) in allMessages" :key="i" :class="messageClass(message)">
      <p class="chat-list_author">{{ message.username }}</p>
      <p class="chat-list_text">{{ message.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ChatList',
  props: ["allMessages", "currentUser"],
  computed: {
  },
  methods: {
    messageClass(message) {
      const { currentUser } = this;
      const username = currentUser.displayName || currentUser.email;

      return message.username === username ? 'chat-list_message user' : 'chat-list_message'
    }
  }
}
</script>


<style scoped lang="scss">
.chat-list {
  margin: 0;
  padding: 1rem 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: calc(100vh - 120px);
  overflow: scroll;
  color: $black;
  &_message {
    width: auto;
    display: inline-block;
    padding-left: 1rem;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    &.user {
      .chat-list_author {
        color: $blue;
      }
    }
  }
  &_text {
    margin: .5rem 0 0;
    border-radius: 4rem;
    text-align: left;
  }
  &_author {
    font-weight: bold;
    margin: 0;
    text-align: left;
  }
}
</style>
