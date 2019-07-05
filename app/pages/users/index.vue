<template>
  <section class="container">
    <div>
      <h2 class="subtitle">あなたのPalette</h2>
      <Palette />
    </div>
  </section>
</template>

<script>
import Palette from '~/components/Palette.vue'

export default {
  components: {
    Palette
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 60px;
  /*color: #526488;*/
  color: #874b01;
  word-spacing: 5px;
  margin: 30px;
}

.links {
  padding-top: 15px;
}
</style>
