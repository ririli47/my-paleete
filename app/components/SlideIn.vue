<template>
  <div class="container">
    <div id="usage1">
      <p id="usage-text">
        あなたの色に名前をつけよう。
      </p>
    </div>
    <div class="merits">
      <div class="merit">
        1
      </div>
      <div class="merit">
        2
      </div>
      <div class="merit">
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
#usage1 {
  height: 10vh;
  width: 100%;
  display: flex;
}

#usage-text {
  flex: 0 1 auto;
  margin: auto;
  font-size: 2rem;
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.merits {
  margin-top: 100px;
  display: flex;
}

.merit {
  flex: 1 30%;
  margin: auto;
}
</style>
