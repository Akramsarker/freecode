<template>
  <div class="main-app-container">
    <AppHeader />
    <nuxt style="min-height: calc(100vh - 64px)" />
    <AppFooter />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import AppHeader from '~/components/app-header.vue'
import AppFooter from '~/components/app-footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {}
  },
  computed: {
    isLoggedIn() {
      return !!this.$store.state.user
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'signin' })
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style lang="scss" scoped>
.outline-none {
  outline: none;
}
.logo {
  height: 2rem;
}
.language {
  font-weight: bold;
  cursor: pointer;
}
.active {
  color: #007934;
}
</style>
