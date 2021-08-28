<template>
  <form @submit.prevent="doLogin()" class="form-login">
    <div class="card">
      <div class="card-header text-center">
        <h1>Expanses</h1>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            required
            v-model="email"
            type="text"
            class="form-control"
            placeholder="E-mail"
          >
        </div>
        <div class="form-group">
          <input
            required
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Senha"
          >
        </div>
        <button class="btn btn-primary w-100" :disabled="loading">
          <template v-if="loading">
            Entrando...
            <i class="fa fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Entrar
            <i class="fa fa-sign-in-alt"></i>
          </template>
        </button>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async doLogin () {
      this.loading = true
      const { email, password } = this
      try {
        const res = await this.$firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        window.uid = res.user.uid
        if (this.$router.currentRoute.name !== 'home') {
          this.$router.push({ name: 'home' })
        }
      } catch (err) {
        let message = ''
        switch (err.code) {
          case 'auth/user-not-found':
            message = 'Não foi possível localizar o usuário'
            break
          case 'auth/wrong-password':
            message = 'Senha inválida'
            break
          default:
            message = 'Não foi possível fazer o login, tente novamente'
        }
        this.$root.$emit('Notification::show', {
          type: 'danger',
          message
        })
      }
      this.loading = false
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (window.uid) {
        vm.$router.push({ name: 'home' })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .form-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
      font-size: 18pt;
    }

    .card {
      width: 30%;
      color: var(--darker);
    }
  }
</style>
