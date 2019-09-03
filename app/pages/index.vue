<template>
  <div class="background">
    <div class="chach-copy">
      <p>あなただけのパレットがここにある。</p>
      <a class="button is-primary trial" href="/users"
        >ログインせずに使ってみる</a
      >
    </div>
  </div>
</template>

<script>
// import Arrow from '~/components/Arrow.vue'
// import SlideIn from '~/components/SlideIn.vue'

export default {
  components: {
    // Arrow,
    // SlideIn
  },
  layout: 'LP',
  methods: {
    login() {
      this.$router.push('/users')
    }
  }
}
</script>

<style scoped>
.arrow {
  margin: 0 auto;
}

.chach-copy {
  display: flex;
  flex-direction: column;
}

.background {
  background-color: rgb(255, 233, 161);
  background: linear-gradient(rgb(255, 233, 161), rgb(255, 198, 101));
  height: 95vh;
  width: 100vw;
}
.background::after {
  content: '';
  height: 95vh;
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
p {
  flex: 1;
  margin: auto;
  margin-top: 20%;
  font-size: 4rem;
  text-align: center;
  justify-content: center;
  align-content: middle;
}

.trial {
  margin: auto;
  margin-top: 10%;
  font-size: 2rem;
  text-align: center;
}

.usage {
  width: 100vw;
  height: 50vh;
  margin: 0 auto;
  background-color: #f8f8f8;
}

@keyframes slide1 {
  100% {
    transform: translateX(80%);
  }
}
</style>
