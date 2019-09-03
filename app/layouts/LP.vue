<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/"> My Palette</a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" @click="signUp">
                <strong>SignUp</strong>
              </a>
              <a class="button is-light" @click="signIn">
                SignIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    async signIn() {
      try {
        console.log('starting...')
        await this.$store.dispatch('users/googleSignIn')
        console.log('loading...')

        if (this.$store.getters['users/getUser'] != null) {
          this.$router.push('/users')
        } else {
          Error('cannot login')
        }
      } catch (e) {
        console.log(e)
      }
    },
    signUp() {}
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.background {
  background-color: rgb(255, 233, 161);
  background: linear-gradient(rgb(255, 233, 161), rgb(255, 198, 101));
}
.background::after {
  content: '';
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.25) 3%,
      rgba(255, 255, 255, 0.25) 3%,
      transparent 3%,
      transparent 97%,
      rgba(255, 255, 255, 0.25) 97%,
      rgba(255, 255, 255, 0.25) 100%
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.25) 3%,
      rgba(255, 255, 255, 0.25) 3%,
      transparent 3%,
      transparent 97%,
      rgba(255, 255, 255, 0.25) 97%,
      rgba(255, 255, 255, 0.25) 100%
    );
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
