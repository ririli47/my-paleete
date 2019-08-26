<template>
  <div class="text-xs-center">
    <div class="chach-copy">
      <p>あなただけのパレットがここにある。</p>
    </div>

    <nuxt-link v-scroll-to="'#anchor'" to>
      <Arrow class="arrow" />
    </nuxt-link>
    <div id="anchor" class="usage">
      <SlideIn />
    </div>
    <div class="usage"></div>
  </div>
</template>

<script>
import Arrow from '~/components/Arrow.vue'
import SlideIn from '~/components/SlideIn.vue'

export default {
  components: {
    Arrow,
    SlideIn
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
  height: 80vh;
  width: 100%;
}

p {
  flex: 1;
  margin: auto;
  font-size: 4rem;
  text-align: center;
  justify-content: middle;
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
